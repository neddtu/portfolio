import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { personalInfo, stats } from "../data";

// One short entrance for the hero; everything else stays still
const rise = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] items-center px-6 pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-12">
        {/* ---- Left: copy ---- */}
        <div className="lg:col-span-7">
          {personalInfo.available && (
            <motion.p
              variants={rise}
              initial="hidden"
              animate="show"
              custom={0}
              className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-sm text-muted"
            >
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Open to new roles and freelance work
            </motion.p>
          )}

          <motion.h1
            variants={rise}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display mt-6 text-4xl font-semibold leading-[1.1] text-fg sm:text-5xl lg:text-6xl"
          >
            Hi, I'm {personalInfo.name}. I build web, mobile and AI products.
          </motion.h1>

          <motion.p
            variants={rise}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Full-stack developer in Hanoi with 6+ years of experience in ReactJS,
            Next.js, NestJS and React Native. Lately I also add AI features
            with the OpenAI API and RAG.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-on-accent transition-opacity hover:opacity-90"
            >
              See my projects
              <ArrowRight
                size={18}
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 font-medium text-fg transition-colors hover:bg-soft"
            >
              Contact me
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={rise}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6 border-t border-line pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-semibold text-fg tnum">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- Right: portrait ---- */}
        <motion.figure
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto w-full max-w-sm lg:col-span-5"
        >
          <img
            src="/profile.png"
            alt={`Portrait of ${personalInfo.name}`}
            width={480}
            height={560}
            className="aspect-[4/5] w-full rounded-3xl border border-line bg-elev object-cover"
          />
          <figcaption className="mt-3 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} /> Hanoi, Vietnam
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
};

export default Hero;
