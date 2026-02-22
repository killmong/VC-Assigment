import Card from "@/components/ui/card";
import Badge from "@/components/ui/badge";

export default function ListCard({ list, companies, navigate }) {
  const listCompanies = list.companyIds
    .map((id) => companies.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <Card className="overflow-hidden">
      <div className="px-6 py-4 border-b bg-slate-50">
        {list.name}
        <Badge className="ml-2">{listCompanies.length}</Badge>
      </div>

      {listCompanies.map((company) => (
        <div
          key={company.id}
          onClick={() => navigate("/company", { id: company.id })}
          className="px-6 py-3 hover:bg-slate-50 cursor-pointer"
        >
          {company.name}
        </div>
      ))}
    </Card>
  );
}
