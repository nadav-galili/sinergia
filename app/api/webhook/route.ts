import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Destructure the data (adjust field names as needed)
    const { name, email, message } = data;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use a different email service (e.g., Outlook, SendinBlue)
      auth: {
        user: "nadavg1000@gmail.com", // Replace with your email
        pass: "hnwv inga vero xoxe", // Replace with your email password or app-specific password
      },
    });

    // Configure the email to send
    const mailOptions = {
      from: "nadavg1000@gmail.com",
      to: "nadavg@mobile-brain.net",
      subject: "New Contact Submission",
      text: `You have a new contact submission:
      - Name: ${name}
      - Email: ${email}
      - Message: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: ", info.response);

    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send email",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
