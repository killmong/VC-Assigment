import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import Badge from "@/components/ui/badge";

export default function CommandPalette({
  open,
  onClose,
  companies,
  navigate,
}) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const results = companies
    .filter(c =>
      c.name.toLowerCase().includes(query.toLowerCase())
    )
    .slice(0, 5);

  return (
    <div
      className="fixed inset-0 bg-black/40 flex justify-center pt-[20vh]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl w-full max-w-xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b">
          <Search className="mr-3" />
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 outline-none"
            placeholder="Search companies..."
          />
        </div>

        {results.map(c => (
          <button
            key={c.id}
            onClick={() => {
              navigate("/company", { id: c.id });
              onClose();
            }}
            className="w-full flex justify-between p-3 hover:bg-slate-50"
          >
            {c.name}
            <Badge>{c.stage}</Badge>
          </button>
        ))}
      </div>
    </div>
  );
}