import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text, qrImage) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Event Booking" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html: `
      <p>${text}</p>
      <p><strong>Scan this QR Code:</strong></p>
      <img src="cid:qrCodeImage" alt="QR Code" />
    `,
    attachments: [
      {
        filename: "qrcode.png",
        content: qrImage.split("base64,")[1],
        encoding: "base64",
        cid: "qrCodeImage",
      },
    ],
  });
};

export default sendEmail;
