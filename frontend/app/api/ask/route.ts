import { GoogleGenAI } from "@google/genai";
import { log } from "console";
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

    const apikey = process.env.GEMINI_API_KEY;

    if (!apikey) {
        return NextResponse.json(
            { error: "API key is not configured. Please set the GEMINI_API_KEY environment variable." },
            { status: 500 }
        );
    }

    const ai = new GoogleGenAI({ apiKey: apikey });

    const prompt =
        mode === "explain"
            ? `Explain this topic clearly for a student: ${question}`
            : `Create 3 practice quiz questions with answers about: ${question}`;


    try {

        const response = await ai.interactions.create({
            model: "gemini-4-hydrogen",
            input: prompt
        });

        const answer = response.output_text?.trim();

        console.log("AI Response:", answer);

        return NextResponse.json({ answer });


    } catch (error) {

        console.error("Gemini request failed:", error);
        return NextResponse.json(
            { error: "AI generation failed. Please try again." },
            { status: 502 }
        );


    }



}
