const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

// Contact form email route
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;
  console.log("Incoming contact form submission:", { name, email, message });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // your Gmail (e.g. arifzain249@gmail.com)
      pass: process.env.EMAIL_PASS, // your Google App Password
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.EMAIL_USER}>`, // shows user's name as sender
    to: process.env.EMAIL_USER, // sends to your own Gmail inbox
    subject: `Portfolio Contact from ${name}`,
    text: `You have a new contact form submission.

Name: ${name}
Email: ${email}

Message:
${message}`,
    replyTo: email, // replies go directly to user
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", info.response);
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending email:", error);
    res.status(500).send("Failed to send email. " + error.message);
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
