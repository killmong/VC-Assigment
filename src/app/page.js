"use client"
import { useState } from "react";
import { useEffect } from "react";
import Sidebar from "../components/layout/Sidebar";
import DirectoryView from "../components/directory/DirectoryView";
import ProfileView from "../components/profile/ProfileView";
import ListsView from "../components/lists/ListsView";
import SavedSearchesView from "../components/saved/SavedSearchesView";

import { INITIAL_COMPANIES } from "../data/companies";

export default function App() {
  /* ---------------- ROUTING STATE ---------------- */
  const [currentRoute, setCurrentRoute] = useState({
    path: "/companies",
    params: {},
  });

  const navigate = (path, params = {}) =>
    setCurrentRoute({ path, params });

  /* ---------------- GLOBAL APP STATE ---------------- */
  const [companies, setCompanies] = useState(INITIAL_COMPANIES);

  const [lists, setLists] = useState([
    {
      id: "l1",
      name: "Q3 Watchlist",
      companyIds: ["1", "10", "4"],
    },
  ]);

  const [savedSearches, setSavedSearches] = useState([
    {
      id: "s1",
      name: "Series A DevTools",
      query: "",
      filters: { sector: "Developer Tools", stage: "Series A" },
    },
  ]);

  const [notes, setNotes] = useState({});

  /* ---------------- LOCAL STORAGE LOAD ---------------- */
  useEffect(() => {
    const saved = localStorage.getItem("vc_scout_data");

    if (!saved) return;

    const parsed = JSON.parse(saved);

    setLists(parsed.lists || []);
    setSavedSearches(parsed.savedSearches || []);
    setNotes(parsed.notes || {});

    if (parsed.companies) {
      setCompanies(parsed.companies);
    }
  }, []);

  /* ---------------- LOCAL STORAGE SAVE ---------------- */
  useEffect(() => {
    localStorage.setItem(
      "vc_scout_data",
      JSON.stringify({
        lists,
        savedSearches,
        notes,
        companies,
      })
    );
  }, [lists, savedSearches, notes, companies]);

  /* ---------------- HELPERS ---------------- */
  const updateCompany = updatedCompany => {
    setCompanies(prev =>
      prev.map(c =>
        c.id === updatedCompany.id ? updatedCompany : c
      )
    );
  };

  const selectedCompany = companies.find(
    c => c.id === currentRoute.params.id
  );

  /* ---------------- APP LAYOUT ---------------- */
  return (
    <div className="flex h-screen w-full bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <Sidebar
        currentRoute={currentRoute}
        navigate={navigate}
        lists={lists}
        savedSearches={savedSearches}
      />

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {currentRoute.path === "/companies" && (
          <DirectoryView
            companies={companies}
            navigate={navigate}
            savedSearches={savedSearches}
            setSavedSearches={setSavedSearches}
          />
        )}

        {currentRoute.path === "/company" && (
          <ProfileView
            company={selectedCompany}
            updateCompany={updateCompany}
            navigate={navigate}
            lists={lists}
            setLists={setLists}
            notes={notes}
            setNotes={setNotes}
          />
        )}

        {currentRoute.path === "/lists" && (
          <ListsView
            lists={lists}
            companies={companies}
            setLists={setLists}
            navigate={navigate}
          />
        )}

        {currentRoute.path === "/saved" && (
          <SavedSearchesView
            savedSearches={savedSearches}
            setSavedSearches={setSavedSearches}
            navigate={navigate}
          />
        )}
      </main>
    </div>
  );
}