import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export default function SavedSearchCard({ search, navigate, onDelete }) {
  return (
    <Card className="p-5 flex justify-between">
      <div>
        <h3 className="font-semibold">{search.name}</h3>
        <p className="text-xs text-slate-500">
          Sector: {search.filters.sector}
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => navigate("/companies")}
        >
          Run
        </Button>

        <Button size="sm" variant="ghost" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
