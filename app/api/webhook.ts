import nodemailer from "nodemailer";

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { _type, name, email, message } = req.body; // Adjust fields based on your schema

  if (_type !== "contacts") {
    return res.status(400).send({ message: "Invalid type" });
  }

  // Nodemailer setup (use a free Gmail account or a service like SendinBlue)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "nadavg1000@gmail.com",
      pass: "Emmush2016",
    },
  });

  const mailOptions = {
    from: "nadavg1000@gmail.com",
    to: "nadavg1000@gmail.com",
    subject: "New Contact Submission",
    text: `You have a new contact submission:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error sending email" });
  }
}
