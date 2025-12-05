import { createClient } from "next-sanity";
import { NextResponse } from "next/server";
import { clientConfig } from "../../../../sanity/config/client-config";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const client = createClient({
    ...clientConfig,
    token: process.env.SANITY_API_TOKEN,
  });

  try {
    await client.create({
      _type: "newsletter",
      email,
      subscribedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      { message: "Successfully subscribed to the newsletter!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { message: "Failed to subscribe. Please try again later." },
      { status: 500 }
    );
  }
}
