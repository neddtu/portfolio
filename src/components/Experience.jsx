import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { experiences } from "../data";

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-20 md:py-28">

      <div className="mx-auto max-w-6xl">
        <SectionHeading>Experience</SectionHeading>

        <div className="mt-10 max-w-3xl">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.company}-${index}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
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
              <div className="pb-8 group-last:pb-0">
                <div className="rounded-2xl border border-line bg-elev p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-display text-lg font-semibold text-fg">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="rounded-full bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent-text">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-muted">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-faint">
                    <span className="tnum">{exp.period}</span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-muted"
                      >
                        <span className="mt-2.5 h-1 w-1 flex-shrink-0 rounded-full bg-faint" />
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
