import { useState } from "react";
import Button from "@/components/ui/button";
import ProfileHeader from "./ProfileHeader";
import OverviewTab from "./OverViewTab";
import SignalsTab from "./SignalsTab";
import NotesTab from "./NotesTab";

export default function ProfileView({
  company,
  updateCompany,
  navigate,
  lists,
  setLists,
  notes,
  setNotes,
}) {
  const [isEnriching, setIsEnriching] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [noteInput, setNoteInput] = useState(notes[company?.id] || "");

  if (!company)
    return (
      <div className="p-8">
        Company not found.
        <Button onClick={() => navigate("/companies")}>Back</Button>
      </div>
    );

  const handleEnrich = () => {
    setIsEnriching(true);

    setTimeout(() => {
      const enrichedCompany = {
        ...company,
        enriched: true,
        summary: `(Enriched) ${company.name} is rapidly expanding its footprint in ${company.sector}.`,
        keywords: ["Enterprise", "B2B", "SOC2", "Platform", "API"],
        signals: [
          {
            id: 1,
            type: "Hiring Velocity",
            text: "Detected 14 new enterprise roles.",
            date: "Just now",
            impact: "high",
          },
          {
            id: 2,
            type: "Product Velocity",
            text: "3 major feature releases detected.",
            date: "2 days ago",
            impact: "medium",
          },
        ],
        lastEnriched: new Date().toISOString(),
      };

      updateCompany(enrichedCompany);
      setIsEnriching(false);
    }, 2500);
  };

  const handleSaveNote = () => {
    setNotes((prev) => ({ ...prev, [company.id]: noteInput }));
    alert("Notes saved to local storage.");
  };

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <ProfileHeader
        company={company}
        navigate={navigate}
        lists={lists}
        setLists={setLists}
        isEnriching={isEnriching}
        handleEnrich={handleEnrich}
      />

      <div className="p-8 max-w-5xl">
        {activeTab === "overview" && <OverviewTab company={company} />}

        {activeTab === "signals" && (
          <SignalsTab company={company} handleEnrich={handleEnrich} />
        )}

        {activeTab === "notes" && (
          <NotesTab
            company={company}
            noteInput={noteInput}
            setNoteInput={setNoteInput}
            handleSaveNote={handleSaveNote}
          />
        )}
      </div>

      {/* Tabs */}
      <div className="flex gap-6 px-8 border-t border-slate-200">
        {["overview", "signals", "notes"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-3 text-sm capitalize ${
              activeTab === tab
                ? "text-indigo-600 border-b-2 border-indigo-600"
                : "text-slate-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
