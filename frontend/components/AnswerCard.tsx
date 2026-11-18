import { Mode } from "@/types/edumind";

type AnswerCardProps = {
    answer: string;
    mode: Mode;
};

const AnswerCard = ({ answer, mode }: AnswerCardProps) => {

    if (!answer) {
        return null;
    }

    return (
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
    );
}
export default AnswerCard;