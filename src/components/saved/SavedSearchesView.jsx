import  Card  from "@/components/ui/card";
import  Button  from "@/components/ui/button";
import { Filter, Trash2 } from "lucide-react";

 const SavedSearchesView = ({ savedSearches, setSavedSearches, navigate }) => {
  const deleteSearch = (id) => setSavedSearches(savedSearches.filter(s => s.id !== id));

  return (
    <div className="flex flex-col h-full overflow-y-auto">
      <header className="h-16 border-b border-slate-200 bg-white px-8 flex items-center shrink-0">
        <h1 className="text-xl font-semibold">Saved Searches</h1>
      </header>
      <div className="p-8 max-w-4xl">
        <div className="grid gap-4">
          {savedSearches.length === 0 && <p className="text-slate-500">No saved searches yet. Save a query from the Directory.</p>}
          {savedSearches.map(search => (
            <Card key={search.id} className="p-5 flex items-center justify-between hover:border-indigo-200 transition-colors">
              <div>
                <h3 className="font-semibold text-slate-900 mb-1">{search.name}</h3>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Filter className="h-3 w-3" />
                  {search.query && <span>Query: "{search.query}"</span>}
                  <span>Sector: {search.filters.sector}</span>
                  <span>Stage: {search.filters.stage}</span>
                </div>
              </div>
              <div className="flex gap-2">
                 <Button variant="outline" size="sm" onClick={() => navigate('/companies')}>
                   Run Search
                 </Button>
                 <Button variant="ghost" size="sm" onClick={() => deleteSearch(search.id)}>
                   <Trash2 className="h-4 w-4 text-slate-400 hover:text-red-500" />
                 </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedSearchesView;