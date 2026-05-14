import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  const { error } = await resend.emails.send({
    from: "AI Docs <onboarding@resend.dev>",
    to: email,
    subject: "You're on the AI Docs waitlist",
    html: `
      <h1>Thanks for joining!</h1>
      <p>We'll let you know when AI Docs is ready.</p>
    `,
  });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json({ success: true });
}
