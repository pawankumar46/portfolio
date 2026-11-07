import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { fadeUp } from "../motion";

const facts = [
  { label: "Based", value: "India" },
  { label: "Experience", value: "4.5 years" },
  { label: "Focus", value: "React & RN" },
];

const About = () => {
  const reduce = useReducedMotion();

  return (
    <PageTransition className="page">
      <motion.h1 variants={fadeUp} className="sr-only">
        About
      </motion.h1>

      <div className="grid gap-12 md:grid-cols-12">
        <motion.aside
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col gap-5 md:col-span-3"
        >
          {facts.map((fact) => (
            <p key={fact.label} className="text-[var(--step-small)]">
              <span className="block text-[var(--muted)]">{fact.label}</span>
              <span className="font-medium text-[var(--ink)]">{fact.value}</span>
            </p>
          ))}
        </motion.aside>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="md:col-span-9"
        >
          <p className="max-w-3xl text-[clamp(1.125rem,1.5vw,1.35rem)] leading-[1.4] text-[var(--ink)]">
            Front-end developer specializing in React.js, React Native, and TypeScript.
            I build intuitive, pixel-precise interfaces with Redux, API integration, and
            performance work baked in.
          </p>
          <p className="mt-8 max-w-2xl text-[var(--step-body)] text-[var(--muted)]">
            I have shipped scalable apps that cut bounce, slimmed redundant API calls, and
            kept codebases clean enough to grow. Right now I am deepening advanced front-end
            patterns for high-performance products.
          </p>
        </motion.div>
      </div>

      <section className="mt-28 grid gap-10 md:grid-cols-2">
        {[
          {
            title: "Frontend",
            items: [
              "Modern React.js & React Native",
              "TypeScript & JavaScript (ES6+)",
              "Redux & state management",
              "Responsive product UI",
            ],
          },
          {
            title: "Tools",
            items: [
              "Git & version control",
              "REST APIs & GraphQL",
              "Jest & React Testing Library",
              "CI/CD & deployment",
            ],
          },
        ].map((block, i) => (
          <motion.div
            key={block.title}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.45 }}
            className="bg-[var(--surface)] p-8 sm:p-10"
          >
            <h2 className="mb-5 text-[var(--step-lead)] font-medium">{block.title}</h2>
            <ul className="space-y-2 text-[var(--step-body)] text-[var(--muted)]">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>
    </PageTransition>
  );
};

export default About;
