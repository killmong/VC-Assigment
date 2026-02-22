
import Button from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";

export default function SignalsTab({ company, handleEnrich }) {
  if (!company.enriched)
    return (
      <div className="text-center p-12 border rounded-xl">
        <Sparkles className="mx-auto mb-3 text-slate-300" />
        <p className="mb-4 text-slate-500">
          Run enrichment to generate signals.
        </p>
        <Button variant="ai" onClick={handleEnrich}>
          Enrich Profile
        </Button>
      </div>
    );

  return (
    <div className="space-y-6">
      {company.signals.map((signal) => (
        <div key={signal.id} className="border p-4 rounded-xl">
          <div className="flex justify-between mb-1">
            <span className="font-bold">{signal.type}</span>
            <span className="text-xs text-indigo-600">{signal.date}</span>
          </div>
          <div className="text-sm text-slate-600 flex gap-2">
            <Clock className="h-4 w-4" />
            {signal.text}
          </div>
        </div>
      ))}
    </div>
  );
}
