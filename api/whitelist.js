import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const data = JSON.parse(req.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: "Whitelist <no-reply@paradiserp.com>",
    to: "paradiseroleplay01@gmail.com",
    subject: "New Whitelist Application",
    text: `
IC Name: ${data.icname}
OOC Name: ${data.oocname}
Age: ${data.age}
Country: ${data.country}
RP Experience: ${data.experience}
Reason: ${data.reason}
    `,
  });

  res.status(200).json({ success: true });
}