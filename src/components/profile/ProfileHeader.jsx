import { useState } from "react";

import Button from "@/components/ui/button";

import Badge from "@/components/ui/badge";
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  Loader2,
  Bookmark,
  CheckCircle2,
} from "lucide-react";

export default function ProfileHeader({
  company,
  navigate,
  lists,
  setLists,
  isEnriching,
  handleEnrich,
}) {
  const [showListMenu, setShowListMenu] = useState(false);

  const toggleCompanyInList = (listId) => {
    setLists((prev) =>
      prev.map((list) => {
        if (list.id === listId) {
          const exists = list.companyIds.includes(company.id);
          return {
            ...list,
            companyIds: exists
              ? list.companyIds.filter((id) => id !== company.id)
              : [...list.companyIds, company.id],
          };
        }
        return list;
      }),
    );
    setShowListMenu(false);
  };

  return (
    <header className="border-b bg-white px-8 py-6 sticky top-0 z-10">
      <button
        onClick={() => navigate("/companies")}
        className="flex items-center text-sm text-slate-500 mb-4"
      >
        <ArrowLeft className="h-4 w-4 mr-1" />
        Back to Directory
      </button>

      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="h-16 w-16 rounded-lg bg-slate-100 flex items-center justify-center text-2xl font-bold">
            {company.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-2xl font-bold flex items-center gap-2">
              {company.name}
              {company.enriched && (
                <Badge variant="ai">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Enriched
                </Badge>
              )}
            </h1>

            <div className="text-sm text-slate-500 flex gap-2">
              <a
                href={`https://${company.url}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center"
              >
                {company.url}
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
              <span>•</span>
              <span>{company.location}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-3 relative">
          <Button
            variant="outline"
            onClick={() => setShowListMenu(!showListMenu)}
          >
            <Bookmark className="h-4 w-4 mr-2" />
            Save to List
          </Button>

          {showListMenu && (
            <div className="absolute right-0 top-12 w-48 bg-white border rounded-lg shadow">
              {lists.map((list) => (
                <button
                  key={list.id}
                  onClick={() => toggleCompanyInList(list.id)}
                  className="w-full text-left px-4 py-2 flex justify-between hover:bg-slate-50"
                >
                  {list.name}
                  {list.companyIds.includes(company.id) && (
                    <CheckCircle2 className="h-4 w-4 text-indigo-600" />
                  )}
                </button>
              ))}
            </div>
          )}

          <Button variant="ai" onClick={handleEnrich} disabled={isEnriching}>
            {isEnriching ? (
              <Loader2 className="h-4 w-4 animate-spin mr-2" />
            ) : (
              <Sparkles className="h-4 w-4 mr-2" />
            )}
            {isEnriching ? "Scraping..." : "Enrich with AI"}
          </Button>
        </div>
      </div>
    </header>
  );
}
