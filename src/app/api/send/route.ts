import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongoose";
import Greeting from "@/models/Greeting";

export async function POST(request: Request) {
    const { name, message } = await request.json();

    try {
        await dbConnect();

        const newGreeting = new Greeting({ name, message });
        await newGreeting.save();

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error en API:", error);
        return NextResponse.json({ success: false, error: error instanceof Error ? error.message : "Unknown error" });
    }
}
