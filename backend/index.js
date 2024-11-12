import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import { config } from "dotenv";

const port = process.env.PORT || 3000;
const app = express();

config({ path: "./.env" });

app.use(cors());
app.use(express.json());

app.post("/api/send-email", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, Email, and Message are required!",
    });
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASSWORD,
    },
  });

  const mailPayload = {
    from: email,
    to: process.env.USER,
    subject: "New message from your portfolio website",
    text: `Message from ${name} (${email}): ${message}`,
    html: `<div>
             <p>This is an email from your portfolio website.</p>
             <p><strong>Sender:</strong> ${name} (${email})</p>
             <p><strong>Message:</strong></p>
             <p>${message}</p>
           </div>`,
  };

  transport.sendMail(mailPayload, (error, info) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
        error: error.message,
      });
    }
    return res.status(201).json({
      success: true,
      message: "Email sent successfully!",
      info,
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
