import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
import dotenv from "dotenv";

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

// SPA fallback: serve index.html for non-static routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
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
