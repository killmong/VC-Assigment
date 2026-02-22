import React, { forwardRef } from "react";

/**
 * Reusable Button Component
 * - supports variants & sizes
 * - forwards ref
 * - accepts all native button props
 */

const variantStyles = {
  primary: "bg-slate-900 text-white hover:bg-slate-900/90 shadow-sm",
  secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200",
  outline: "border border-slate-200 bg-white hover:bg-slate-100 text-slate-900",
  ghost: "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
  ai: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
};

const sizeStyles = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-4 py-2",
  icon: "h-9 w-9",
};

const baseStyle =
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50";

const Button = forwardRef(
  (
    {
      children,
      variant = "primary",
      size = "md",
      className = "",
      type = "button",
      ...props
    },
    ref,
  ) => {
    const variantClass = variantStyles[variant] || variantStyles.primary;

    const sizeClass = sizeStyles[size] || sizeStyles.md;

    return (
      <button
        ref={ref}
        type={type}
        className={`${baseStyle} ${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
