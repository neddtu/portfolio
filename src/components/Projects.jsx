import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Shield,
  Radio,
  Image,
  Smartphone,
  Video,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

// Map the data's icon keys to Lucide components (no emoji as icons)
const ICONS = {
  factory: Factory,
  shield: Shield,
  radio: Radio,
  image: Image,
  smartphone: Smartphone,
  video: Video,
};

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading index="03" label="Selected Work">
            Things I've <span className="text-accent-text italic">built</span>.
          </SectionHeading>
          <a
            href={projects.length ? "#contact" : undefined}
            className="hidden font-mono text-sm text-muted transition-colors hover:text-fg sm:inline-flex sm:items-center sm:gap-1.5"
          >
            Want something built? <ArrowUpRight size={15} />
          </a>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = ICONS[project.icon] || Factory;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.55, delay: (index % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-line bg-elev p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong"
              >
                {/* hover accent wash */}
                <div className="glow-blob pointer-events-none absolute -right-16 -top-16 h-48 w-48 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden="true" />

                <div className="relative flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-xl border border-line text-accent-text transition-colors duration-300 group-hover:border-accent group-hover:bg-accent-soft">
                    <Icon size={20} />
                  </span>
                  <span className="font-display text-5xl font-medium leading-none text-line-strong tnum transition-colors duration-300 group-hover:text-accent-soft">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative mt-6">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                    {project.category}
                  </p>
                  <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-medium text-fg">
                    {project.title}
                    <ArrowUpRight
                      size={18}
                      className="text-faint opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="relative mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-line px-2.5 py-1 font-mono text-[11px] text-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
