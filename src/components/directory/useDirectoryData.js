// components/directory/useDirectoryData.js
import { useMemo } from "react";

export default function useDirectoryData(
  companies,
  search,
  sectorFilter,
  stageFilter,
) {
  const sectors = useMemo(
    () => ["All", ...new Set(companies.map((c) => c.sector))],
    [companies],
  );

  const stages = useMemo(
    () => ["All", ...new Set(companies.map((c) => c.stage))],
    [companies],
  );

  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      const matchesSearch =
        c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.summary.toLowerCase().includes(search.toLowerCase());

      const matchesSector = sectorFilter === "All" || c.sector === sectorFilter;

      const matchesStage = stageFilter === "All" || c.stage === stageFilter;

      return matchesSearch && matchesSector && matchesStage;
    });
  }, [companies, search, sectorFilter, stageFilter]);

  return {
    sectors,
    stages,
    filteredCompanies,
  };
}
