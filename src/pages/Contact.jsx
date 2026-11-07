import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { easeOut } from "../motion";

const rows = [
  { label: "Pawan Kumar", href: null },
  {
    label: "pawanpk552@gmail.com",
    href: "mailto:pawanpk552@gmail.com?subject=Hello%20Pawan",
  },
  { label: "+91 96111 51935", href: "tel:+919611151935" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pawan-kumar-m-77511b142",
  },
  {
    label: "GitHub",
    href: "https://github.com/pawankumar46",
  },
];

const Contact = () => {
  const reduce = useReducedMotion();

  return (
    <PageTransition className="pt-16">
      <h1 className="sr-only">Contact</h1>
      <div className="flex flex-col">
        {rows.map((row, i) => {
          const Tag = row.href ? motion.a : motion.div;
          const props = row.href
            ? {
                href: row.href,
                ...(row.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {}),
              }
            : {};

          return (
            <motion.div
              key={row.label}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.06, duration: 0.4, ease: easeOut }}
              className={`min-h-[6.25rem] ${i % 2 === 0 ? "bg-[var(--bg)]" : "bg-[var(--surface)]"}`}
            >
              <Tag
                {...props}
                whileHover={reduce || !row.href ? undefined : { x: 10, color: "var(--accent)" }}
                transition={{ duration: 0.22 }}
                className="flex h-full min-h-[5rem] items-end px-5 pb-4 text-[clamp(1.25rem,3.2vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--ink)] sm:px-8"
              >
                {row.label}
              </Tag>
            </motion.div>
          );
        })}

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.4 }}
          className="flex min-h-[5rem] items-end gap-5 bg-[var(--accent)] px-5 pb-4 sm:px-8"
        >
          <span className="text-[clamp(1.25rem,3.2vw,2.5rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--accent-ink)]">
            Hello
          </span>
          <motion.a
            href="mailto:pawanpk552@gmail.com?subject=Hello%20Pawan"
            aria-label="Send email"
            whileHover={reduce ? undefined : { scale: 1.08, x: 4 }}
            whileTap={{ scale: 0.96 }}
            className="mb-1 inline-flex h-[0.9em] w-[0.9em] items-center justify-center rounded-full bg-[var(--ink)] text-[var(--bg)]"
          >
            <svg className="h-1/3 w-1/3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Contact;
