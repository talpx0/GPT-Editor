/* IconButton.tsx */
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";           // optional, but fun
import { LucideIcon } from "lucide-react";
import React from "react";

type Props = {
  as?: "nav" | "button";     // defaults to <button>
  to?: string;               // only for NavLink
  onClick?: () => void;
  icon: LucideIcon;
  label: string;             // for screen readers / tooltips
};

export const IconButton = ({
  as = "button",
  to,
  onClick,
  icon: Icon,
  label,
}: Props) => {
  const common =
    "group inline-flex items-center justify-center h-11 w-11 rounded-full \
    bg-gradient-to-br from-indigo-700 to-blue-600 shadow-lg transition-all \
    hover:from-blue-600 hover:to-indigo-700 hover:shadow-blue-500/40 \
    active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-400/70";

  const content = (
    <>
      {/* <motion> adds a subtle tilt on hover */}
      <motion.span
        whileHover={{ rotate: -5 }}
        whileTap={{ scale: 0.9 }}
        className="pointer-events-none"
      >
        <Icon className="h-5 w-5 text-white" />
      </motion.span>
      {/* keep the label for a11y */}
      <span className="sr-only">{label}</span>
    </>
  );

  return as === "nav" ? (
    <NavLink to={to!} className={common} onClick={onClick}>
      {content}
    </NavLink>
  ) : (
    <button onClick={onClick} className={common}>
      {content}
    </button>
  );
};
