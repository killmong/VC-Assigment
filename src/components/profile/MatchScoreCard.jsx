import { Target } from "lucide-react";

export default function MatchScoreCard({ score }) {
  if (!score) return null;

  return (
    <div className="bg-indigo-50 border rounded-xl p-5 flex justify-between">
      <div>
        <div className="flex items-center gap-2 font-semibold">
          <Target className="h-5 w-5" />
          Thesis Match Score
        </div>
        <p className="text-sm text-slate-600">
          Alignment with investment thesis.
        </p>
      </div>

      <div className="h-16 w-16 rounded-full border-4 border-indigo-500 flex items-center justify-center font-bold text-xl">
        {score}
      </div>
    </div>
  );
}