import React from "react";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { personalInfo, menuItems } from "../data";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line px-6 pt-16 pb-10">
      <div className="relative mx-auto max-w-6xl">
        {/* Big call to action */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-line pb-12 lg:flex-row lg:items-end">
          <div>
            <p className="text-sm text-muted">
              Let's talk
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-3 inline-flex items-center gap-3 break-all font-display text-3xl font-semibold leading-tight text-fg sm:text-5xl"
            >
              {personalInfo.email}
              <ArrowUpRight
                size={32}
                className="text-accent-text transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:bg-accent-soft"
            >
              <Github size={18} /> GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 text-sm font-medium text-fg transition-colors hover:border-accent hover:bg-accent-soft"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-display text-sm font-bold text-on-accent">
              {personalInfo.firstName.charAt(0)}
            </span>
            <p className="text-sm text-faint">
              © {year} {personalInfo.name}
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="py-2 text-sm text-faint transition-colors hover:text-fg"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <p className="text-sm text-faint">
            Built with React &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
