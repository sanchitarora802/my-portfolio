import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  try {
    const { name, email, message } = req.body;

    await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "sanchit.arora802@gmail.com",
      subject: `New message from ${name} on your portfolio`,
      reply_to: email,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message: ${message}</p>`,
    });

    // Use res.status().json() to send the response for the Pages Router
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    // Use res.status().json() for errors as well
    res.status(500).json({ error: "Error sending email" });
  }
}
