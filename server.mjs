import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:8081', 'http://localhost:8082'],
  credentials: true
}));

// Set proper MIME types
app.use(express.static(path.join(__dirname, "dist"), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.mjs')) {
      res.setHeader('Content-Type', 'application/javascript');
    } else if (filePath.endsWith('.json')) {
      res.setHeader('Content-Type', 'application/json');
    } else if (filePath.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css');
    }
  }
}));

// Explicit manifest.json route
app.get('/manifest.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.sendFile(path.join(__dirname, 'dist', 'manifest.json'));
});

app.use(express.json({ limit: "200kb" }));

app.post("/api/contact", async (req, res) => {
  const { name, phone, email, message } = req.body ?? {};

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ ok: false, error: "Missing required fields" });
  }

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_SECURE,
    SMTP_USER,
    SMTP_PASS,
    ADMIN_EMAIL,
    FROM_EMAIL,
  } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.log("SMTP not configured - logging form submission instead:");
    console.log("Name:", name);
    console.log("Phone:", phone);
    console.log("Email:", email);
    console.log("Message:", message);
    return res.json({ ok: true, message: "Form logged successfully (SMTP not configured)" });
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true",
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const to = ADMIN_EMAIL || "info@orchiddental.co.uk";
  const from = FROM_EMAIL || SMTP_USER;

  try {
    // 1. Send the inquiry alert to the admin in the background
    transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    }).catch(err => console.error("Admin Email send failed:", err));

    // 2. Send a confirmation auto-response to the customer who filled out the form in the background
    transporter.sendMail({
      to: email,
      from,
      subject: `Thank you for contacting Orchid Dental`,
      text: `Hi ${name},\n\nThank you for contacting Orchid Dental. We have received your message and our team will get back to you shortly.\n\nHere is a copy of your message:\n"${message}"\n\nBest regards,\nThe Orchid Dental Team`,
    }).catch(err => console.error("User Email send failed:", err));

    return res.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ ok: false, error: "Failed to process request" });
  }
});

// Backend SEO Setup
app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  res.send("User-agent: *\nAllow: /\nSitemap: https://orchiddental.co.uk/sitemap.xml");
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  const baseUrl = "https://orchiddental.co.uk";
  const routes = ['', '/booking', '/contact', '/fees', '/team', '/treatments'];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  routes.forEach(route => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${route}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>${route === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  res.send(xml);
});

const SEO_MAP = {
  '/': { title: 'Orchid Dental | Premium Dental Practice in London', desc: 'Welcome to Orchid Dental, your premium dental practice in Willesden, London NW10.' },
  '/contact': { title: 'Contact Us | Orchid Dental London', desc: 'Get in touch with Orchid Dental Practice in Willesden, London NW10. Book your appointment today.' },
  '/booking': { title: 'Book an Appointment | Orchid Dental', desc: 'Book your dental consultation at Orchid Dental Practice online easily.' },
  '/team': { title: 'Our Team | Orchid Dental Experts', desc: 'Meet our highly experienced and friendly dental professionals at Orchid Dental.' },
  '/fees': { title: 'Fees & Pricing | Orchid Dental', desc: 'Transparent dental fees and pricing for our premium treatments in London.' },
  '/treatments': { title: 'Dental Treatments | Orchid Dental', desc: 'Explore our wide range of professional dental treatments and cosmetic procedures.' },
};

// SPA fallback: serve index.html for non-static routes, injecting SEO dynamically
app.get("*", async (req, res) => {
  try {
    const indexPath = path.join(__dirname, "dist", "index.html");
    let html = await fs.readFile(indexPath, 'utf-8');

    // Backend SEO Injection
    const route = req.path;
    const seo = SEO_MAP[route] || SEO_MAP['/'];
    
    // Enhanced JSON-LD Schema for LocalBusiness (Dentist)
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Dentist",
      "name": "Orchid Dental",
      "image": "https://orchiddental.co.uk/logo_main.png",
      "url": "https://orchiddental.co.uk",
      "telephone": "020 8459 2626",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "158–160 High Road",
        "addressLocality": "Willesden, London",
        "postalCode": "NW10 2PB",
        "addressCountry": "UK"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ]
    };

    // Extreme SEO - Target exactly what people mistype
    const misspelledKeywords = "orhid dental, orcid dental, orched dental, orchard dental, dentist willesden, dentis nw10, teath dr london, ortid dental, orchid dentle, best dentst london, orhid dentl, orhid dntlist";

    // Create Advanced meta tags
    const metaTags = `
    <!-- Ultra-Powerful Backend SEO -->
    <title>${seo.title}</title>
    <meta name="description" content="${seo.desc}">
    <meta name="keywords" content="orchid dental, dentist, dental practice, london, nw10, willesden, cosmetic dentistry, ${misspelledKeywords}">
    <link rel="canonical" href="https://orchiddental.co.uk${route}" />
    
    <meta property="og:title" content="${seo.title}">
    <meta property="og:description" content="${seo.desc}">
    <meta property="og:url" content="https://orchiddental.co.uk${route}">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="Orchid Dental">
    
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${seo.title}">
    <meta name="twitter:description" content="${seo.desc}">
    
    <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
    <!-- End Ultra-Powerful Backend SEO -->
    `;

    // Inject before </head> to override any default client-side tags
    html = html.replace('</head>', `${metaTags}\n</head>`);
    
    res.send(html);
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.status(404).send("Frontend build not found (run npm run build).");
    } else {
      console.error("Error serving index.html:", err);
      res.status(500).send("Server Error");
    }
  }
});

let port = Number(process.env.PORT) || 6000;

function startServer(p) {
  const server = app.listen(p, () => {
    console.log(`Server running on http://localhost:${p}`);
  });

  server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
      console.log(`Port ${p} is in use, trying ${p + 1}...`);
      startServer(p + 1);
    } else {
      console.error('Server error:', e);
      process.exit(1);
    }
  });
}

startServer(port);
