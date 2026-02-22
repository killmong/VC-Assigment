export default function NavItem({ active, onClick, icon: Icon, label, badge }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
        active
          ? "bg-slate-100 text-slate-900"
          : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center">
        <Icon className="h-4 w-4 mr-3" />
        {label}
      </div>

      {badge !== undefined && (
        <span className="bg-slate-100 text-slate-600 py-0.5 px-2 rounded-full text-xs">
          {badge}
        </span>
      )}
    </button>
  );
}
