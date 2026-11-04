import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { skillGroups, education, activities } from "../data";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const InfoCard = ({ icon: Icon, kicker, title, subtitle, period }) => (
  <motion.div variants={fadeUp} className="rounded-2xl border border-line bg-elev p-5">
    <p className="flex items-center gap-2 text-sm text-muted">
      <Icon size={16} className="text-accent-text" /> {kicker}
    </p>
    <h3 className="mt-3 font-medium text-fg">{title}</h3>
    <p className="text-sm text-muted">{subtitle}</p>
    <p className="mt-1 font-mono text-xs text-faint">{period}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading>About</SectionHeading>

        <div className="mt-10 grid gap-12 lg:grid-cols-12">
          {/* Narrative */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ staggerChildren: 0.08 }}
            className="lg:col-span-7"
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.5 }}
              className="space-y-4 text-lg leading-relaxed text-muted"
            >
              <p>
                I work on the whole product: from requirements and UI to APIs,
                releases on the App Store and Google Play, and production support.
              </p>
              <p>
                Most days that means ReactJS and React Native, with Node.js or
                NestJS on the backend. I've also built realtime features with
                Socket.IO and WebRTC, and AI features with the OpenAI API and RAG.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
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
            transition={{ staggerChildren: 0.06 }}
            className="lg:col-span-5"
          >
            <motion.h3
              variants={fadeUp}
              transition={{ duration: 0.4 }}
              className="text-lg font-semibold text-fg"
            >
              Skills
            </motion.h3>

            <div className="mt-5 space-y-6">
              {skillGroups.map((group) => (
                <motion.div key={group.label} variants={fadeUp} transition={{ duration: 0.4 }}>
                  <p className="mb-2.5 text-sm font-medium text-muted">{group.label}</p>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-soft px-2.5 py-1 text-sm text-fg"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
