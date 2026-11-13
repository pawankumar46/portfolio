import { motion, useReducedMotion } from "framer-motion";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import Toast from "../components/Toast";
import { contact, site, socials } from "../data/portfolio";

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const validate = (f: Fields): Errors => {
  const errors: Errors = {};
  if (f.name.trim().length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) errors.email = "Enter a valid email, like you@company.com.";
  if (f.message.trim().length < 20) errors.message = "Tell me a little more (at least 20 characters).";
  return errors;
};

const Contact = () => {
  const reduce = useReducedMotion();
  const [fields, setFields] = useState<Fields>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(id);
  }, [toast]);

  const update = (key: keyof Fields, value: string) => {
    const next = { ...fields, [key]: value };
    setFields(next);
    if (touched) setErrors(validate(next));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    const result = validate(fields);
    setErrors(result);
    if (Object.keys(result).length) {
      const first = Object.keys(result)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    const subject = encodeURIComponent(`Project enquiry from ${fields.name}`);
    const body = encodeURIComponent(`${fields.message}\n\n— ${fields.name} (${fields.email})`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setToast("Opening your email app…");
    setFields({ name: "", email: "", message: "" });
    setTouched(false);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setToast("Email copied to clipboard");
    } catch {
      setToast("Couldn't copy. Email: " + site.email);
    }
  };

  const fieldError = (key: keyof Fields) =>
    errors[key] ? (
      <p id={`contact-${key}-error`} className="mt-2 text-sm text-coral">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="glow glow-violet left-[-10%] top-[10%] h-[70vh] w-[70vh]" />
        <div className="glow glow-coral bottom-[-10%] right-[-5%] h-[60vh] w-[60vh]" />
      </div>

      <div className="page-x mx-auto max-w-page">
        <motion.h2
          id="contact-title"
          className="font-display text-[clamp(3rem,10vw,10rem)] font-bold leading-[0.9]"
          initial={reduce ? false : "hidden"}
          whileInView="shown"
          viewport={{ once: true, margin: "-10% 0px" }}
        >
          {contact.heading.split(" ").map((word, i, arr) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <motion.span
                className={`inline-block ${i === arr.length - 1 ? "text-lime" : ""}`}
                variants={{ hidden: { y: "110%" }, shown: { y: "0%" } }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {word}
              </motion.span>
              {i < arr.length - 1 && "\u00a0"}
            </span>
          ))}
        </motion.h2>

        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-5">
            <p className="max-w-md text-lg text-white/85">{contact.intro}</p>

            <div className="mt-10 space-y-6">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <a href={`mailto:${site.email}`} className="font-display text-2xl font-semibold hover:text-lime sm:text-3xl">
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="glass rounded-full px-4 py-2 text-sm transition-colors hover:border-lime/60 hover:text-lime"
                  >
                    Copy
                  </button>
                </div>
              </div>
              <div>
                <ul className="flex flex-wrap gap-3">
                  {socials.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="chip glass"
                      >
                        {s.label} <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="chip glass">
                      {site.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
            <form noValidate onSubmit={onSubmit} className="glass space-y-5 rounded-[1.75rem] p-6 sm:p-9">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  id="contact-name"
                  className="field"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "contact-name-error" : undefined}
                  placeholder="Your name"
                />
                {fieldError("name")}
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  className="field"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "contact-email-error" : undefined}
                  placeholder="you@company.com"
                />
                {fieldError("email")}
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  className="field resize-none"
                  value={fields.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "contact-message-error" : undefined}
                  placeholder="What are you building, and how can I help?"
                />
                {fieldError("message")}
              </div>
              <Button type="submit" magnetic className="w-full sm:w-auto">
                Send message <span aria-hidden="true">→</span>
              </Button>
            </form>
          </Reveal>
        </div>
      </div>

      <Toast message={toast} />
    </section>
  );
};

export default Contact;
