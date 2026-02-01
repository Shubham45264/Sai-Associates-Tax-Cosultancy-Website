import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/* ---------------- CONTACT FORM ---------------- */
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Sai Associates Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Contact Form Submission",
      html: `
        <h3>Contact Form Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: "Contact email sent" });
  } catch (err) {
    res.status(500).json({ message: "Email failed" });
  }
});

/* ---------------- CAREER FORM ---------------- */
app.post("/api/career", async (req, res) => {
  const { name, email, phone, position, message } = req.body;

  if (!name || !phone || !position) {
    return res.status(400).json({ message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: `"Sai Associates Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🧑‍💼 New Career Application",
      html: `
        <h3>Career Application</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    });

    res.status(200).json({ message: "Career email sent" });
  } catch (err) {
    res.status(500).json({ message: "Email failed" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
