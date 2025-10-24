import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, budget, message } = await req.json();

    if (!firstName || !lastName || !email || !budget || !message) {
      return NextResponse.json({ message: "Please fill all fields" }, { status: 400 });
    }

    
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Orbit MatrixPortfolio <onboarding@resend.dev>",
      to: "orbitmatrix.work@gmail.com",
      subject: `New message from ${firstName} ${lastName}`,
      text: `Email: ${email}\nBudget: ${budget}\nMessage: ${message}`,
    });

    console.log("New message:", { firstName, lastName, email, budget, message });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
