import React from "react";

/**
 * Reusable Badge Component
 * - supports variants
 * - accepts custom className
 * - forwards all HTML props
 */

const variantStyles = {
  default: "bg-slate-100 text-slate-900",
  ai: "bg-indigo-100 text-indigo-700",
  success: "bg-emerald-100 text-emerald-700",
};

const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const styles = variantStyles[variant] || variantStyles.default;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${styles} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Badge;
