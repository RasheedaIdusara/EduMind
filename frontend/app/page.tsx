"use client";
import AnswerCard from "@/components/AnswerCard";
import Hero from "@/components/Herosection";
import Navbar from "@/components/Navbar";
import QuestionForm from "@/components/QuestionForm";
import { FormEvent, useState } from "react";

const Home = () => {

  type Mode = "explain" | "quiz";

  const [mode, setMode] = useState<Mode>("explain");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleGenerate(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedQuestion = question.trim();


    if (!trimmedQuestion) {
      setError("Please enter a question first.");
      return;
    }

    setError("");
    setAnswer("");
    setLoading(true);

    try {

      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: trimmedQuestion, mode }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      if (!data.answer) {
        throw new Error("No answer received from AI.");
      }

      setAnswer(data.answer);




    } catch (error) {

      console.error("AI Generation Error:", error);

      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );

    } finally {

      setLoading(false);

    }

  }

  function handleQuestionChange(value: string) {
    setQuestion(value);
    setError("");
    setAnswer("");
  }

  function handleModeChange(newMode: Mode) {
    if (loading) return;

    setMode(newMode);
    setAnswer("");
    setError("");
  }


  return (

    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">


        {/* Question Card */}
        <QuestionForm
          question={question}
          mode={mode}
          loading={loading}
          error={error}
          onQuestionChange={handleQuestionChange}
          onModeChange={handleModeChange}
          onSubmit={handleGenerate}
        />

        {/* Answer Card */}
        <AnswerCard
          answer={answer}
          mode={mode}
        />

      </section>

      <p className="mt-12 text-center text-sm text-slate-500">
        EduMind — Learn. Practice. Grow.
      </p>
    </main>


  );

}

export default Home;

