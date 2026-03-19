import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

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
  });

  const to = ADMIN_EMAIL || "info@orchiddental.co.uk";
  const from = FROM_EMAIL || SMTP_USER;

  try {
    await transporter.sendMail({
      to,
      from,
      replyTo: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    return res.json({ ok: true });
  } catch (err) {
    console.error("Email send failed:", err);
    return res.status(500).json({ ok: false, error: "Failed to send" });
  }
});

// SPA fallback: serve index.html for non-static routes
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const port = Number(process.env.PORT) || 6000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
