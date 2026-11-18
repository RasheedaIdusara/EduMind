"use client";
import AnswerCard from "@/components/AnswerCard";
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

    if (!question.trim()) {
      setError("Please enter a question first.");
      return;
    }

    setError("");
    setAnswer("");
    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 800)
    );

    const demoAnswer =
      mode === "explain"
        ? `Demo explanation for: "${question.trim()}"`
        : `Demo quiz for: "${question.trim()}"`;

    setAnswer(demoAnswer);
    setLoading(false);


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

