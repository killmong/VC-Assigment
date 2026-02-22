import Button from "@/components/ui/button";

export default function Pagination({ count }) {
  return (
    <div className="px-6 py-3 border-t bg-slate-50 flex justify-between text-xs">
      <span>Showing {count} results</span>

      <div className="flex gap-1">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="outline" size="sm" disabled>
          Next
        </Button>
      </div>
    </div>
  );
}
