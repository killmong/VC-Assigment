import Card from "@/components/ui/card";

import Badge from "@/components/ui/badge";

import { Sparkles, CheckCircle2 } from "lucide-react";

export default function OverviewTab({ company }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      <div className="col-span-2 space-y-6">
        <Card className="p-6">
          <h3 className="font-semibold text-lg mb-3">Executive Summary</h3>
          <p className="text-slate-600">{company.summary}</p>

          {company.keywords && (
            <div className="flex flex-wrap gap-2 mt-4">
              {company.keywords.map((k) => (
                <Badge key={k}>{k}</Badge>
              ))}
            </div>
          )}
        </Card>

        {company.enriched && (
          <Card className="p-6 bg-indigo-50/30">
            <div className="flex gap-2 mb-4 text-indigo-800">
              <Sparkles className="h-5 w-5" />
              <h3 className="font-semibold">AI Derived Insights</h3>
            </div>

            <ul className="space-y-3">
              {company.signals.map((s) => (
                <li key={s.id}>
                  <p className="font-medium">{s.type}</p>
                  <p className="text-sm text-slate-600">{s.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-4 text-xs text-slate-400 flex items-center">
              <CheckCircle2 className="h-3 w-3 mr-1" />
              {new Date(company.lastEnriched).toLocaleTimeString()}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
