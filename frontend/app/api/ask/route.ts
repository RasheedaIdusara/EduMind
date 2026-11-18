import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const data = await req.json().catch(() => null);

    const question = data?.question;
    const mode = data?.mode;

    if (
        typeof question !== "string" ||
        !question.trim() ||
        question.length > 2000 ||
        (mode !== "explain" && mode !== "quiz")
    ) {

        return NextResponse.json(
            { error: "Invalid input. Please provide a valid question and mode." },
            { status: 400 }
        );

        

    }

}
