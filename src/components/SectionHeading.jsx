import React from "react";
import { motion } from "framer-motion";

/**
 * Editorial section header: a monospaced numbered kicker above a large
 * serif display title. Shared across all sections for a consistent rhythm.
 *
 * Props:
 *  - index:   two-digit section number, e.g. "01"
 *  - label:   short uppercase kicker, e.g. "About"
 *  - children: the display title (can include accent <span>s)
 *  - align:   "left" (default) | "center"
 */
const SectionHeading = ({ index, label, children, align = "left" }) => {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "text-center" : "text-left"}
    >
      <div
        className={`flex items-center gap-3 mb-5 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="font-mono text-xs text-accent-text tnum">[ {index} ]</span>
        <span className="font-mono text-xs uppercase tracking-[0.3em] text-faint">
          {label}
        </span>
        <span className="h-px w-10 bg-line-strong" aria-hidden="true" />
      </div>
      <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-fg max-w-3xl">
        {children}
      </h2>
    </motion.div>
  );
};

export default SectionHeading;
