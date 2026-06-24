import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { menuItems, personalInfo } from "../data";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  // Shrink/condense the bar once the user scrolls past the hero fold
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the nav item for the section currently in view
  useEffect(() => {
    const ids = menuItems.map((m) => m.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Prevent body scroll while the mobile sheet is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled
            ? "mt-3 h-14 rounded-full border border-line bg-bg/70 backdrop-blur-xl"
            : "mt-0 h-20 border-b border-transparent"
        }`}
      >
        {/* Wordmark */}
        <a href="#hero" className="group flex items-center gap-2.5">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-display text-sm font-bold text-on-accent">
            {personalInfo.firstName.charAt(0)}
          </span>
          <span className="font-mono text-sm tracking-tight text-fg">
            {personalInfo.name}
            <span className="text-accent-text">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {menuItems.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <a
                key={item.title}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive ? "text-fg" : "text-muted hover:text-fg"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.title}</span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.cvPath}
            download
            className="hidden rounded-full border border-line-strong px-4 py-2 text-sm font-medium text-fg transition-colors hover:bg-accent hover:text-on-accent hover:border-accent sm:inline-block"
          >
            Resume
          </a>
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg md:hidden"
            aria-label="Open menu"
          >
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-mono text-sm text-fg">menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-6">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className="flex items-baseline gap-4 border-b border-line py-5 font-display text-4xl text-fg"
                >
                  <span className="font-mono text-sm text-accent-text tnum">
                    0{i + 1}
                  </span>
                  {item.title}
                </motion.a>
              ))}
              <a
                href={personalInfo.cvPath}
                download
                onClick={() => setIsOpen(false)}
                className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-4 font-medium text-on-accent"
              >
                Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
