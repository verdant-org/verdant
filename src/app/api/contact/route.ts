import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { contact } from "@/db/schemas/contact";
import { eq } from "drizzle-orm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const { email, message } = await req.json();

    if (!email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
    if (!message){
        return NextResponse.json({ message: "Message is required" }, { status: 400 });
    }
    try {
        await db.insert(contact).values({ email, message}).onConflictDoNothing();
        const data = await resend.emails.send({
            from: process.env.RESEND_EMAIL_ADDRESS as string, 
            to: ["verdant@resend.dev"], 
            subject: "New Contact Form Message",
            html: `
                <p><strong>From:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `
        });

        return NextResponse.json({ message: "Message sent via email" });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Failed to send email" }, { status: 500 });
    }


}
