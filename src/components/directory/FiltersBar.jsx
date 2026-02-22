// components/directory/FiltersBar.jsx
import { Search } from "lucide-react";

export default function FiltersBar({
  search,
  setSearch,
  sectorFilter,
  setSectorFilter,
  stageFilter,
  setStageFilter,
  sectors,
  stages,
}) {
  return (
    <div className="mb-6 flex flex-col sm:flex-row gap-4">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search companies..."
          className="w-full pl-10 pr-4 py-2 border rounded-md"
        />
      </div>

      <select
        value={sectorFilter}
        onChange={(e) => setSectorFilter(e.target.value)}
        className="px-3 py-2 border rounded-md"
      >
        {sectors.map((s) => (
          <option key={s}>{s === "All" ? "All Sectors" : s}</option>
        ))}
      </select>

      <select
        value={stageFilter}
        onChange={(e) => setStageFilter(e.target.value)}
        className="px-3 py-2 border rounded-md"
      >
        {stages.map((s) => (
          <option key={s}>{s === "All" ? "All Stages" : s}</option>
        ))}
      </select>
    </div>
  );
}
