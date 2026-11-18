"use client";
import Navbar from "@/components/Navbar";
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


  return (

    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <Navbar />

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        

        {/* Question Card */}
        <div className="mx-auto mt-12 max-w-3xl rounded-3xl border border-white/10 bg-slate-900 p-5 shadow-2xl md:p-8">

          <h2 className="text-xl font-semibold">
            What would you like to learn?
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Enter a topic or question to get started.
          </p>

          {/* Mode Selection */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setMode("explain")}
              className={`rounded-xl px-5 py-3 text-sm font-medium transition ${mode === "explain"
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
            >
              Explain Topic
            </button>

            <button
              type="button"
              onClick={() => setMode("quiz")}
              className={`rounded-xl px-5 py-3 text-sm font-medium transition ${mode === "quiz"
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
            >
              Generate Quiz
            </button>
          </div>

          {/* Question Form */}
          <form onSubmit={handleGenerate} className="mt-6">

            <label
              htmlFor="question"
              className="mb-3 block text-sm font-medium text-slate-300"
            >
              Your question
            </label>

            <textarea
              id="question"
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);
                setError("");
              }}
              placeholder="Example: Explain Object-Oriented Programming..."
              rows={5}
              maxLength={2000}
              className="w-full resize-y rounded-2xl border border-white/10 bg-slate-950 p-4 text-white outline-none transition placeholder:text-slate-500 focus:border-teal-500"
            />

            {error && (
              <p role="alert" className="mt-2 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-5 w-full rounded-xl bg-teal-500 px-6 py-4 font-semibold text-slate-950 transition hover:bg-teal-400 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Answer"}
            </button>
          </form>
        </div>

        {/* Answer Section */}
        {answer && (
          <section
            aria-live="polite"
            className="mx-auto mt-8 max-w-3xl rounded-3xl border border-teal-500/20 bg-slate-900 p-6 md:p-8"
          >
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-teal-400">
                {mode === "explain" ? "Explanation" : "Practice Quiz"}
              </h2>

              <span className="rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
                Demo response
              </span>
            </div>

            <p className="whitespace-pre-wrap leading-8 text-slate-300">
              {answer}
            </p>
          </section>
        )}

      </section>

      <p className="mt-12 text-center text-sm text-slate-500">
        EduMind — Learn. Practice. Grow.
      </p>
    </main>


  );

}

export default Home;
function setLoading(arg0: boolean) {
  throw new Error("Function not implemented.");
}

