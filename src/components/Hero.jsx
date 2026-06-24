import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown, Code2, Smartphone, MapPin } from "lucide-react";
import { personalInfo, roles, stats } from "../data";

// Reusable rise-in transition for staggered hero content
const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter cycle through roles
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 1800);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 45 : 95
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-28 pb-20"
    >
      {/* Background: hairline grid + accent glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60" aria-hidden="true" />
      <div className="glow-blob pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem]" aria-hidden="true" />
      <div className="glow-blob pointer-events-none absolute bottom-[-15%] left-[-10%] h-[28rem] w-[28rem] opacity-60" aria-hidden="true" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-12">
        {/* ---- Left: copy ---- */}
        <div className="lg:col-span-7">
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-elev/60 px-3.5 py-1.5 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs text-muted">
              Available for new projects
            </span>
          </motion.div>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-mono text-sm uppercase tracking-[0.35em] text-faint"
          >
            {personalInfo.name}
          </motion.p>

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="font-display mt-3 text-[3.5rem] font-medium leading-[0.95] text-fg sm:text-7xl lg:text-8xl"
          >
            Full-Stack
            <br />
            Developer<span className="text-accent-text">.</span>
          </motion.h1>

          {/* Accent rule + typed role */}
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-7 flex items-center gap-4"
          >
            <span className="h-px w-12 bg-accent" />
            <span className="font-mono text-sm text-muted">
              <span className="text-accent-text">$</span> {displayText}
              <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-accent-text" />
            </span>
          </motion.div>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-7 max-w-xl text-lg leading-relaxed text-muted"
          >
            I build fast, refined web and mobile products with{" "}
            <span className="font-medium text-fg">ReactJS</span>,{" "}
            <span className="font-medium text-fg">Next.js</span>,{" "}
            <span className="font-medium text-fg">NestJS</span>, and{" "}
            <span className="font-medium text-fg">React Native</span>. Five-plus
            years turning complex requirements into products people enjoy using.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-medium text-on-accent transition-transform duration-200 hover:-translate-y-0.5"
            >
              View selected work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3.5 font-medium text-fg transition-colors hover:bg-soft"
            >
              Get in touch
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={6}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-3xl font-semibold text-fg tnum">
                  {stat.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-wider text-faint">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- Right: portrait ---- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:col-span-5"
        >
          <div className="relative">
            {/* Accent frame offset */}
            <div className="absolute -inset-3 -z-10 rounded-[2rem] border border-accent/40" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-line bg-elev">
              <img
                src="/profile.png"
                alt={`Portrait of ${personalInfo.name}`}
                width={480}
                height={560}
                className="aspect-[4/5] w-full object-cover"
              />
              {/* Bottom caption bar */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-5 pb-4 pt-12">
                <span className="flex items-center gap-1.5 font-mono text-xs text-white/90">
                  <MapPin size={13} /> Hanoi, VN
                </span>
                <span className="rounded-full bg-accent px-2.5 py-1 font-mono text-[11px] font-semibold text-on-accent">
                  5+ yrs
                </span>
              </div>
            </div>

            {/* Floating tech chips */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-5 top-10 flex items-center gap-2 rounded-xl border border-line bg-elev px-3 py-2 shadow-lg shadow-black/5"
            >
              <Code2 size={16} className="text-accent-text" />
              <span className="font-mono text-xs text-fg">React</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute -right-5 bottom-24 flex items-center gap-2 rounded-xl border border-line bg-elev px-3 py-2 shadow-lg shadow-black/5"
            >
              <Smartphone size={16} className="text-accent-text" />
              <span className="font-mono text-xs text-fg">React Native</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors hover:text-fg md:flex"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
};

export default Hero;
