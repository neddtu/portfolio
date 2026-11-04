import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Shield,
  Radio,
  Image,
  Smartphone,
  Video,
  CandlestickChart,
  ShoppingBag,
  Bot,
  Puzzle,
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
  trading: CandlestickChart,
  shop: ShoppingBag,
  bot: Bot,
  puzzle: Puzzle,
};

const Projects = () => {
  return (
    <section id="projects" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading lead="A mix of client work, freelance and open source.">
          Projects
        </SectionHeading>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = ICONS[project.icon] || Factory;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 2) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl border border-line bg-elev p-6 transition-colors duration-200 ${project.link ? "hover:border-line-strong" : ""}`}
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-soft text-accent-text">
                    <Icon size={18} />
                  </span>
                  <p className="text-sm text-muted">{project.category}</p>
                </div>

                <div className="mt-5">
                  <h3 className="font-display text-xl font-semibold text-fg">
                    {project.link ? (
                      // Stretched link: the whole card becomes clickable
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 after:absolute after:inset-0 after:content-['']"
                      >
                        {project.title}
                        <ArrowUpRight
                          size={18}
                          className="text-accent-text transition-transform duration-300 group-hover:translate-x-0.5"
                        />
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">
                    {project.description}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-soft px-2 py-0.5 font-mono text-xs text-muted"
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
