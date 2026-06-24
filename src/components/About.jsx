import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups, skills, education, activities } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const InfoCard = ({ icon: Icon, kicker, title, subtitle, period }) => (
  <motion.div
    variants={fadeUp}
    className="group rounded-2xl border border-line bg-elev p-6 transition-colors hover:border-line-strong"
  >
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 place-items-center rounded-xl border border-line text-accent-text transition-colors group-hover:border-accent">
        <Icon size={18} />
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
        {kicker}
      </span>
    </div>
    <h4 className="mt-4 font-medium text-fg">{title}</h4>
    <p className="text-sm text-accent-text">{subtitle}</p>
    <p className="mt-1 font-mono text-xs text-faint">{period}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative px-6 py-24 md:py-36">
      <div className="mx-auto max-w-6xl">
        <SectionHeading index="01" label="About">
          The details are what make
          software feel <span className="text-accent-text italic">right</span>.
        </SectionHeading>

        <div className="mt-16 grid gap-14 lg:grid-cols-12">
          {/* Narrative */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.12 }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="space-y-5 text-lg leading-relaxed text-muted"
            >
              <p>
                I'm an accomplished React developer with{" "}
                <span className="font-medium text-fg">5+ years</span> of
                experience across software design, analysis, and development —
                fluent in JavaScript and TypeScript on ReactJS, NextJS, and
                React Native.
              </p>
              <p>
                I take pride in writing clean, maintainable code and in the
                willingness to learn whatever a problem needs. Beyond the
                frontend, I work with animations, backend stacks like NodeJS and
                NestJS, and the full path of shipping apps to the Play Store and
                App Store.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              <InfoCard
                icon={GraduationCap}
                kicker="Education"
                title={education.school}
                subtitle={education.major}
                period={education.period}
              />
              <InfoCard
                icon={Users}
                kicker="Activities"
                title={activities.organization}
                subtitle={activities.role}
                period={activities.period}
              />
            </motion.div>
          </motion.div>

          {/* Skills grouped */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.1 }}
            className="lg:col-span-5"
          >
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-faint"
            >
              Toolbox
            </motion.h3>

            <div className="mt-6 space-y-7">
              {skillGroups.map((group) => (
                <motion.div key={group.label} variants={fadeUp} transition={{ duration: 0.5 }}>
                  <div className="mb-3 flex items-baseline gap-3">
                    <span className="font-medium text-fg">{group.label}</span>
                    <span className="h-px flex-1 bg-line" />
                    <span className="font-mono text-xs text-faint tnum">
                      {String(group.items.length).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-line bg-elev px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent hover:text-fg"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full-bleed skills marquee */}
      <div className="marquee-mask mt-20 overflow-hidden border-y border-line py-5">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap">
          {[...skills, ...skills].map((skill, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-display text-2xl text-faint"
            >
              {skill}
              <span className="text-accent-text">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
