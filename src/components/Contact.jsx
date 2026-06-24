import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Github, ArrowUpRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { personalInfo } from "../data";

const channels = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: "Location", value: personalInfo.address, href: null },
  { icon: Github, label: "GitHub", value: "@neddtu", href: personalInfo.github },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = (values) => {
    const next = {};
    if (!values.name.trim()) next.name = "Please tell me your name.";
    if (!values.email.trim()) next.email = "An email so I can reply.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "That doesn't look like a valid email.";
    if (!values.message.trim()) next.message = "What would you like to build?";
    return next;
  };

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const onBlur = (field) => () => {
    const fieldError = validate(form)[field];
    setErrors((er) => ({ ...er, [field]: fieldError }));
  };

  // No backend — compose a real email via the user's mail client
  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-bg px-4 py-3.5 text-fg placeholder:text-faint outline-none transition-colors focus:border-accent ${
      errors[field] ? "border-red-500/70" : "border-line"
    }`;

  return (
    <section id="contact" className="relative px-6 py-24 md:py-36">
      <div className="glow-blob pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 opacity-60" aria-hidden="true" />

      <div className="mx-auto max-w-6xl">
        <SectionHeading index="04" label="Contact" align="center">
          <span className="mx-auto block text-center">
            Let's build something{" "}
            <span className="text-accent-text italic">together</span>.
          </span>
        </SectionHeading>

        <p className="mx-auto mt-6 max-w-xl text-center text-lg text-muted">
          I'm open to new opportunities and collaborations. Have a question or a
          project in mind? Drop a line — I usually reply within a day.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          {/* Channels */}
          <div className="lg:col-span-5">
            <div className="grid gap-3">
              {channels.map(({ icon: Icon, label, value, href }) => {
                const Tag = href ? "a" : "div";
                return (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Tag
                      {...(href
                        ? {
                            href,
                            ...(href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {}),
                          }
                        : {})}
                      className="group flex items-center gap-4 rounded-2xl border border-line bg-elev p-4 transition-colors hover:border-line-strong"
                    >
                      <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl border border-line text-accent-text transition-colors group-hover:border-accent group-hover:bg-accent-soft">
                        <Icon size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-xs uppercase tracking-wider text-faint">
                          {label}
                        </span>
                        <span className="block truncate text-fg">{value}</span>
                      </span>
                      {href && (
                        <ArrowUpRight
                          size={16}
                          className="ml-auto text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-text"
                        />
                      )}
                    </Tag>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <motion.form
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-line bg-elev p-6 sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg">
                  Name <span className="text-accent-text">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  onBlur={onBlur("name")}
                  placeholder="Your name"
                  autoComplete="name"
                  aria-invalid={!!errors.name}
                  className={fieldClass("name")}
                />
                {errors.name && (
                  <p role="alert" className="mt-1.5 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg">
                  Email <span className="text-accent-text">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  onBlur={onBlur("email")}
                  placeholder="you@email.com"
                  autoComplete="email"
                  aria-invalid={!!errors.email}
                  className={fieldClass("email")}
                />
                {errors.email && (
                  <p role="alert" className="mt-1.5 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg">
                  Message <span className="text-accent-text">*</span>
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={update("message")}
                  onBlur={onBlur("message")}
                  placeholder="Tell me about your project…"
                  aria-invalid={!!errors.message}
                  className={`${fieldClass("message")} resize-none`}
                />
                {errors.message && (
                  <p role="alert" className="mt-1.5 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3.5 font-medium text-on-accent transition-transform duration-200 hover:-translate-y-0.5"
              >
                {sent ? (
                  <>
                    Opening your mail app <Check size={18} />
                  </>
                ) : (
                  <>
                    Send message
                    <ArrowUpRight
                      size={18}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </>
                )}
              </button>
              <p aria-live="polite" className="text-center font-mono text-xs text-faint">
                {sent
                  ? "Thanks! Your email draft is ready to send."
                  : "Submitting opens a pre-filled draft in your email app."}
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
