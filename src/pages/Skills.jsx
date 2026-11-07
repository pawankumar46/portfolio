import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { easeOut } from "../motion";

const skills = [
  { name: "React.js", note: "Web" },
  { name: "React Native", note: "Mobile" },
  { name: "TypeScript", note: "Types" },
  { name: "Redux", note: "State" },
  { name: "Next.js", note: "Apps" },
  { name: "Tailwind", note: "UI" },
  { name: "Node.js", note: "Runtime" },
  { name: "Git", note: "Flow" },
];

const Skills = () => {
  const reduce = useReducedMotion();

  return (
    <PageTransition>
      <h1 className="sr-only">Skills</h1>
      <section
        className="flex min-h-[100svh] flex-col justify-center py-24"
        style={{ paddingInline: "var(--page-pad)" }}
      >
        <ul className="flex flex-col">
          {skills.map((skill, i) => (
            <motion.li
              key={skill.name}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + i * 0.05, duration: 0.45, ease: easeOut }}
              className="poster-line cursor-default"
            >
              <span>{skill.name}</span>
              <span>{skill.note}</span>
            </motion.li>
          ))}
        </ul>
      </section>
    </PageTransition>
  );
};

export default Skills;
