import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const { name, email, phone, message, service } = await req.json();

  if (!name || !email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "P2Transfers <onboarding@resend.dev>",
    to: "pranavyk@gmail.com",
    replyTo: email,
    subject: `New inquiry from ${name}`,
    html: `
      <h2>New Transfer Counseling Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Package:</strong> ${service || "Not specified"}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${message || "No message provided."}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
