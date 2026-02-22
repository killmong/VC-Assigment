// components/directory/TableHeader.jsx
export default function TableHeader() {
  return (
    <thead className="bg-slate-50 border-b border-slate-200">
      <tr>
        <th className="px-6 py-3 text-slate-500">Company</th>
        <th className="px-6 py-3 text-slate-500">Sector</th>
        <th className="px-6 py-3 text-slate-500">Stage</th>
        <th className="px-6 py-3 text-slate-500">Raised</th>
        <th className="px-6 py-3 text-right text-slate-500">Action</th>
      </tr>
    </thead>
  );
}
