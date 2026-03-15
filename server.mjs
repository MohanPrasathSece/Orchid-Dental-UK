import express from "express";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

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
    return res.status(500).json({ ok: false, error: "SMTP not configured" });
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

  const to = ADMIN_EMAIL || "zyradigitalsofficial@gmail.com";
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

const distPath = path.join(__dirname, "dist");
app.use(express.static(distPath));

app.get("*", (_req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

const port = Number(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
