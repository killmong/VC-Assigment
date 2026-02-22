import { useState } from "react";
import Button from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function CreateListForm({ setLists }) {
  const [name, setName] = useState("");

  const create = () => {
    if (!name.trim()) return;

    setLists((prev) => [
      ...prev,
      { id: Date.now().toString(), name, companyIds: [] },
    ]);

    setName("");
  };

  return (
    <div className="flex gap-3">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-1 border rounded-md px-3 py-2"
        placeholder="New list name"
      />

      <Button onClick={create}>
        <Plus className="h-4 w-4 mr-2" />
        Create
      </Button>
    </div>
  );
}
