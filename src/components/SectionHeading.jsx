import React from "react";
import { motion } from "framer-motion";

/**
 * Plain section header shared across sections: a short title with an
 * optional one-line lead underneath.
 *
 * Props:
 *  - children: the section title
 *  - lead:     optional supporting sentence
 *  - align:    "left" (default) | "center"
 */
const SectionHeading = ({ children, lead, align = "left" }) => {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <h2 className="font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
        {children}
      </h2>
      {lead && <p className="mt-3 text-lg text-muted">{lead}</p>}
    </motion.div>
  );
};

export default SectionHeading;
