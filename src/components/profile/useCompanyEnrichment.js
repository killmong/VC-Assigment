import { useState } from "react";

export default function useCompanyEnrichment(
  company,
  updateCompany
) {
  const [loading, setLoading] = useState(false);

  const enrich = () => {
    setLoading(true);

    setTimeout(() => {
      updateCompany({
        ...company,
        enriched: true,
        matchScore: Math.floor(Math.random() * 20) + 75,
        lastEnriched: new Date().toISOString(),
      });

      setLoading(false);
    }, 2000);
  };

  return { enrich, loading };
}