// components/directory/DirectoryView.jsx
import { useState } from "react";
import Button from "@/components/ui/button";
import Card from "@/components/ui/card";
import { Save, Plus } from "lucide-react";
import FiltersBar from "./FiltersBar";
import DirectoryTable from "./DirectoryTable";
import Pagination from "./Pagination";
import useDirectoryData from "./useDirectoryData";

export default function DirectoryView({
  companies,
  navigate,
  savedSearches,
  setSavedSearches,
}) {
  const [search, setSearch] = useState("");
  const [sectorFilter, setSectorFilter] = useState("All");
  const [stageFilter, setStageFilter] = useState("All");

  const { sectors, stages, filteredCompanies } = useDirectoryData(
    companies,
    search,
    sectorFilter,
    stageFilter,
  );

  const handleSaveSearch = () => {
    const newSearch = {
      id: Date.now().toString(),
      name: `Search: ${search || "All"}`,
      query: search,
      filters: { sector: sectorFilter, stage: stageFilter },
    };

    setSavedSearches([...savedSearches, newSearch]);
  };

  return (
    <div className="flex flex-col h-full">
      <header className="h-16 border-b bg-white px-8 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Global Directory</h1>

        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={handleSaveSearch}>
            <Save className="h-4 w-4 mr-2" />
            Save Query
          </Button>

          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Company
          </Button>
        </div>
      </header>

      <div className="p-8 flex-1 overflow-auto">
        <FiltersBar
          search={search}
          setSearch={setSearch}
          sectorFilter={sectorFilter}
          setSectorFilter={setSectorFilter}
          stageFilter={stageFilter}
          setStageFilter={setStageFilter}
          sectors={sectors}
          stages={stages}
        />

        <Card className="overflow-hidden">
          <DirectoryTable companies={filteredCompanies} navigate={navigate} />

          <Pagination count={filteredCompanies.length} />
        </Card>
      </div>
    </div>
  );
}
