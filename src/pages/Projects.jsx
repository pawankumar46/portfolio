import React, { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import { projects } from "../data/projects";
import { fadeUp, easeOut } from "../motion";

const Projects = () => {
  const [active, setActive] = useState(projects[0].id);
  const reduce = useReducedMotion();
  const current = projects.find((p) => p.id === active) ?? projects[0];

  return (
    <PageTransition className="page">
      <motion.div
        variants={fadeUp}
        className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      >
        <h1 className="section-head">Work</h1>
        <p className="max-w-sm text-[var(--step-small)] text-[var(--muted)]">
          Hover a name to open the brief. Project titles are the gallery.
        </p>
      </motion.div>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.08, duration: 0.45, ease: easeOut }}
            >
              <button
                type="button"
                className={`work-line ${active === project.id ? "is-active" : ""}`}
                onMouseEnter={() => setActive(project.id)}
                onFocus={() => setActive(project.id)}
                onClick={() => setActive(project.id)}
              >
                {project.title}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <div className="sticky top-24 min-h-[16rem] bg-[var(--field)] p-7 text-[var(--field-ink)] sm:p-9">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: easeOut }}
              >
                <p className="mb-8 text-[var(--step-small)] text-[var(--field-ink)]/55">
                  {current.year} · {current.tech}
                </p>
                <h2 className="mb-5 text-[clamp(1.35rem,2vw,1.85rem)] font-semibold leading-[1.1] tracking-[-0.03em]">
                  {current.full}
                </h2>
                <p className="text-[var(--step-body)] leading-relaxed text-[var(--field-ink)]/75">
                  {current.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <motion.p
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-24 max-w-lg text-[var(--step-lead)] text-[var(--ink)]"
      >
        Built for real users — speed, clarity, and calm under load.
      </motion.p>
    </PageTransition>
  );
};

export default Projects;
