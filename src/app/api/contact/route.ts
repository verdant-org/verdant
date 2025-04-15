import { NextResponse } from "next/server";
import { Resend } from "resend";
import { reactContactForm } from "@/lib/email/contact-form"


const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const data = await req.json();

    if (!data.email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
    if (!data.message){
        return NextResponse.json({ message: "Message is required" }, { status: 400 });
    }
    try {
        await resend.emails.send({
            from: "support" + (process.env.RESEND_EMAIL_DNS as string), 
            to: "support" + (process.env.RESEND_EMAIL_DNS as string), 
            subject: "New Contact Form Message",
            react: reactContactForm(data)
        });
        return NextResponse.json({ message: "Message sent via email" });
    } catch (error: any) {
        return NextResponse.json({ message: error.message || "Failed to send email" }, { status: 500 });
    }


}
