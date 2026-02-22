import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

export default function NotesTab({
  company,
  noteInput,
  setNoteInput,
  handleSaveNote,
}) {
  return (
    <div className="max-w-3xl">
      <Card className="p-6">
        <h3 className="font-semibold text-lg mb-4">
          Investment Thesis & Notes
        </h3>

        <textarea
          className="w-full min-h-[200px] p-4 border rounded-md mb-4"
          placeholder={`Write notes for ${company.name}...`}
          value={noteInput}
          onChange={(e) => setNoteInput(e.target.value)}
        />

        <div className="flex justify-end">
          <Button onClick={handleSaveNote}>Save Notes</Button>
        </div>
      </Card>
    </div>
  );
}
