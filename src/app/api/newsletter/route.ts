import { NextResponse } from "next/server";
import { db } from "@/db/drizzle";
import { subscribers } from "@/db/schemas/newsletter";
import { eq } from "drizzle-orm";
export async function GET(){
    return NextResponse.json({message : "Hello?"});
}

export async function POST(req: Request) {
    try {
        const { email, subscribed } = await req.json();

        if (!email) {
            return NextResponse.json({ message: "Email is required" }, { status: 400 });
        }
        if (subscribed) {
            await db.delete(subscribers).where(eq(subscribers.email, email));
            console.log("UNSUB")
            return NextResponse.json({ message: "unsubscribed" });
        } else {
            console.log("SUB")
            await db.insert(subscribers).values({ email, subscribed: true }).onConflictDoNothing();
            return NextResponse.json({ message: "subscribed" });

        }
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: `Error` }, { status: 500 });
    }
}
