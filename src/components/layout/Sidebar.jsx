import { Sparkles, Building2, List, Bookmark } from "lucide-react";
import NavItem from "./NavItem";

export default function Sidebar({
  currentRoute,
  navigate,
  lists,
  savedSearches,
}) {
  return (
    <aside className="w-64 border-r border-slate-200 bg-white flex flex-col">
      <div className="h-16 flex items-center px-6 border-b">
        <Sparkles className="h-5 w-5 text-indigo-600 mr-2" />
        <span className="font-bold text-lg">Scout AI</span>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        <NavItem
          active={currentRoute.path === "/companies"}
          onClick={() => navigate("/companies")}
          icon={Building2}
          label="Directory"
        />

        <NavItem
          active={currentRoute.path === "/lists"}
          onClick={() => navigate("/lists")}
          icon={List}
          label="My Lists"
          badge={lists.length}
        />

        <NavItem
          active={currentRoute.path === "/saved"}
          onClick={() => navigate("/saved")}
          icon={Bookmark}
          label="Saved Searches"
          badge={savedSearches.length}
        />
      </nav>
    </aside>
  );
}