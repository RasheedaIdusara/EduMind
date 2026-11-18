import { Mode } from "@/types/edumind";
import { FormEvent } from "react";

type QuestionFormProps = {
  question: string;
  mode: Mode;
  loading: boolean;
  error: string;
  onQuestionChange: (value: string) => void;
  onModeChange: (mode: Mode) => void;
  onSubmit: (
    event: FormEvent<HTMLFormElement>
  ) => void | Promise<void>;
};

const QuestionForm = ({
    question,
    mode,
    loading,
    error,
    onQuestionChange,
    onModeChange,
    onSubmit
}:QuestionFormProps
) =>{
    return(
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
              onClick={()=> onModeChange("explain")}
              className={`rounded-xl px-5 py-3 text-sm font-medium transition ${mode === "explain"
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
            >
              Explain Topic
            </button>

            <button
              type="button"
              onClick={() => onModeChange("quiz")}
              className={`rounded-xl px-5 py-3 text-sm font-medium transition ${mode === "quiz"
                ? "bg-teal-500 text-slate-950"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                }`}
            >
              Generate Quiz
            </button>
          </div>

          {/* Question Form */}
          <form onSubmit={onSubmit} className="mt-6">

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
                onQuestionChange(e.target.value);
                
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
    );
}

export default QuestionForm;