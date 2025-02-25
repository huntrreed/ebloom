import * as nodemailer from "nodemailer";

export async function handler(event: any) {
  const { name, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "huntrreed@gmail.com", // Your Gmail
      pass: "bitt xhgx yvyd zuot", // App Password
    },
  });

  const mailOptions = {
    from: `"Website Contact" <${email}>`,
    to: "huntrreed@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
}
