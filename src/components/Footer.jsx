import React from "react";
import { Github, ArrowUpRight } from "lucide-react";
import { personalInfo, menuItems } from "../data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line px-6 pt-20 pb-10">
      <div className="glow-blob pointer-events-none absolute -bottom-32 left-1/2 h-72 w-96 -translate-x-1/2 opacity-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        {/* Big call to action */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-line pb-14 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-faint">
              Let's talk
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-4 inline-flex items-center gap-3 font-display text-4xl font-medium leading-tight text-fg sm:text-6xl"
            >
              {personalInfo.email}
              <ArrowUpRight
                size={36}
                className="text-accent-text transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:bg-accent-soft"
          >
            <Github size={18} /> GitHub
          </a>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-display text-sm font-bold text-on-accent">
              {personalInfo.firstName.charAt(0)}
            </span>
            <p className="font-mono text-xs text-faint">
              © {year} {personalInfo.name}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="font-mono text-xs uppercase tracking-wider text-faint transition-colors hover:text-fg"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <p className="font-mono text-xs text-faint">
            Built with React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
