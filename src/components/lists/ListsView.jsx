import { useState } from "react";

import Button from "@/components/ui/button";
import Card from "@/components/ui/card";

import Badge from "@/components/ui/badge";
import { Plus, Trash2, Download } from "lucide-react";

export default function ListsView({ lists, companies, setLists, navigate }) {
  const [newListName, setNewListName] = useState("");

  /* ---------------- CREATE LIST ---------------- */
  const handleCreateList = () => {
    if (!newListName.trim()) return;

    const newList = {
      id: Date.now().toString(),
      name: newListName,
      companyIds: [],
    };

    setLists((prev) => [...prev, newList]);
    setNewListName("");
  };

  /* ---------------- DELETE LIST ---------------- */
  const deleteList = (id) => {
    setLists((prev) => prev.filter((l) => l.id !== id));
  };

  /* ---------------- REMOVE COMPANY ---------------- */
  const removeCompanyFromList = (listId, companyId) => {
    setLists((prev) =>
      prev.map((list) =>
        list.id === listId
          ? {
              ...list,
              companyIds: list.companyIds.filter((id) => id !== companyId),
            }
          : list,
      ),
    );
  };

  /* ---------------- EXPORT CSV ---------------- */
  const exportList = (list) => {
    const listCompanies = list.companyIds
      .map((id) => companies.find((c) => c.id === id))
      .filter(Boolean);

    const csv =
      "data:text/csv;charset=utf-8," +
      "Name,Sector,Stage,Location\n" +
      listCompanies
        .map((c) => `"${c.name}","${c.sector}","${c.stage}","${c.location}"`)
        .join("\n");

    const encodedUri = encodeURI(csv);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute(
      "download",
      `${list.name.replace(/\s+/g, "_")}_export.csv`,
    );

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ---------------- UI ---------------- */
  return (
    <div className="flex flex-col h-full overflow-y-auto">
      {/* Header */}
      <header className="h-16 border-b border-slate-200 bg-white px-8 flex items-center">
        <h1 className="text-xl font-semibold">My Lists</h1>
      </header>

      <div className="p-8 max-w-5xl">
        {/* Create List */}
        <Card className="p-6 mb-8 bg-slate-50 border-dashed border-2">
          <h3 className="font-semibold mb-2">Create New List</h3>

          <div className="flex gap-3">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="e.g., European AI Targets"
              className="flex-1 px-3 py-2 rounded-md border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <Button onClick={handleCreateList}>
              <Plus className="h-4 w-4 mr-2" />
              Create
            </Button>
          </div>
        </Card>

        {/* Lists */}
        <div className="space-y-8">
          {lists.length === 0 && (
            <p className="text-slate-500 text-center py-8">
              No lists created yet.
            </p>
          )}

          {lists.map((list) => {
            const listCompanies = list.companyIds
              .map((id) => companies.find((c) => c.id === id))
              .filter(Boolean);

            return (
              <Card key={list.id} className="overflow-hidden">
                {/* List Header */}
                <div className="px-6 py-4 border-b bg-slate-50 flex justify-between items-center">
                  <h3 className="font-semibold text-lg flex items-center">
                    {list.name}
                    <Badge className="ml-3">{listCompanies.length}</Badge>
                  </h3>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => exportList(list)}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Export CSV
                    </Button>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteList(list.id)}
                      className="text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Companies */}
                {listCompanies.length > 0 ? (
                  <ul className="divide-y divide-slate-100">
                    {listCompanies.map((company) => (
                      <li
                        key={company.id}
                        className="px-6 py-3 flex justify-between items-center hover:bg-slate-50"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            onClick={() =>
                              navigate("/company", {
                                id: company.id,
                              })
                            }
                            className="font-medium text-sm cursor-pointer hover:text-indigo-600"
                          >
                            {company.name}
                          </div>

                          <Badge className="text-[10px] py-0">
                            {company.sector}
                          </Badge>
                        </div>

                        <button
                          onClick={() =>
                            removeCompanyFromList(list.id, company.id)
                          }
                          className="text-xs text-slate-400 hover:text-red-500"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-6 py-8 text-center text-sm text-slate-500">
                    This list is empty. Add companies from the Directory.
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
