import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { contact } from "@/db/schemas/contact";
import { eq } from "drizzle-orm";

export async function POST(req: Request) {
    const { email, message } = await req.json();

    if (!email) {
        return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }
    if (!message){
        return NextResponse.json({ message: "Message is required" }, { status: 400 });
    }
    
    await db.insert(contact).values({ email, message}).onConflictDoNothing();
    return NextResponse.json({ message: "Contacted" });


}
