import React, { forwardRef } from "react";

/**
 * Reusable Card Component
 * Supports:
 * - custom element via `as`
 * - forwarded ref
 * - subcomponents (Header, Content, Footer)
 */

const baseStyle =
  "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm";

/* ---------- ROOT CARD ---------- */
const Card = forwardRef(
  ({ as: Component = "div", className = "", children, ...props }, ref) => {
    return (
      <Component ref={ref} className={`${baseStyle} ${className}`} {...props}>
        {children}
      </Component>
    );
  },
);

Card.displayName = "Card";

/* ---------- SUB COMPONENTS ---------- */

Card.Header = function CardHeader({ className = "", ...props }) {
  return (
    <div className={`p-6 border-b border-slate-200 ${className}`} {...props} />
  );
};

Card.Content = function CardContent({ className = "", ...props }) {
  return <div className={`p-6 ${className}`} {...props} />;
};

Card.Footer = function CardFooter({ className = "", ...props }) {
  return (
    <div className={`p-6 border-t border-slate-200 ${className}`} {...props} />
  );
};

export default Card;
