// components/directory/DirectoryTable.jsx
import Button from "@/components/ui/button";
import Badge from "@/components/ui/badge";
import TableHeader from "./TableHeader";

export default function DirectoryTable({ companies, navigate }) {
  return (
    <table className="w-full text-sm">
      <TableHeader />

      <tbody className="divide-y">
        {companies.map((company) => (
          <tr key={company.id} className="hover:bg-slate-50 group">
            <td className="px-6 py-4">
              <div
                className="font-medium cursor-pointer group-hover:text-indigo-600"
                onClick={() => navigate("/company", { id: company.id })}
              >
                {company.name}
              </div>
            </td>

            <td className="px-6 py-4">
              <Badge>{company.sector}</Badge>
            </td>

            <td className="px-6 py-4">{company.stage}</td>

            <td className="px-6 py-4">{company.raised}</td>

            <td className="px-6 py-4 text-right">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate("/company", { id: company.id })}
              >
                View
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
