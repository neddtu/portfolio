import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-36">
      {/* soft accent wash */}
      <div className="glow-blob pointer-events-none absolute right-0 top-1/3 h-80 w-80 opacity-50" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading index="02" label="Experience">
          Where I've spent <br className="hidden sm:block" />
          the last <span className="text-accent-text italic">five years</span>.
        </SectionHeading>

        <div className="mt-16 max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-[auto_1fr] gap-x-5 sm:gap-x-8"
            >
              {/* Rail */}
              <div className="relative flex flex-col items-center">
                <span
                  className={`mt-1.5 grid h-4 w-4 place-items-center rounded-full border ${
                    exp.current
                      ? "border-accent"
                      : "border-line-strong"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      exp.current ? "bg-accent" : "bg-faint"
                    }`}
                  />
                </span>
                {index !== experiences.length - 1 && (
                  <span className="w-px flex-1 bg-line" />
                )}
              </div>

              {/* Card */}
              <div className="pb-12 group-last:pb-0">
                <div className="rounded-2xl border border-line bg-elev p-6 transition-colors duration-300 hover:border-line-strong sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-display text-xl font-medium text-fg">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent-text">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-accent-text">{exp.company}</p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text"
                    />
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-faint">
                    <span className="tnum">{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
