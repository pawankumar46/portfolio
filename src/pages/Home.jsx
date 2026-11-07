import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import PageTransition from "../components/PageTransition";
import SkillOrbit from "../components/SkillOrbit";
import { projects } from "../data/projects";
import { fadeUpView, staggerChild, staggerParent } from "../motion";

const Home = () => {
  const reduce = useReducedMotion();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.35]);

  return (
    <PageTransition>
      <section
        ref={heroRef}
        className="relative grid min-h-[100svh] grid-cols-1 items-center gap-10 pt-24 lg:grid-cols-12 lg:gap-6"
        style={{ paddingInline: "var(--page-pad)", paddingBottom: "var(--page-pad)" }}
      >
        <div className="flex min-h-[70svh] flex-col justify-between lg:col-span-6 lg:min-h-[calc(100svh-6rem)]">
          <motion.div variants={staggerParent} initial="initial" animate="animate">
            <motion.p variants={staggerChild} className="max-w-xs text-[var(--step-small)] text-[var(--muted)]">
              Front-end developer · React &amp; React Native
            </motion.p>
          </motion.div>

          <motion.h1
            style={reduce ? undefined : { scale, opacity }}
            className="monument my-10 max-w-[18ch] origin-left text-[var(--ink)] lg:my-0"
          >
            <motion.span
              className="block overflow-hidden"
              initial={reduce ? false : { y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              Interfaces that
            </motion.span>
            <motion.span
              className="block overflow-hidden"
              initial={reduce ? false : { y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              feel decisive.
            </motion.span>
          </motion.h1>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-md text-[var(--step-body)] text-[var(--ink)]">
              4.5 years shipping product UI with TypeScript, Redux, and thoughtful motion.
            </p>
            <div className="flex items-center gap-5 lg:hidden">
              <Link to="/projects" className="btn-primary">
                Selected work
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get in touch
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-center gap-8 lg:col-span-6 lg:items-end">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden w-full justify-end gap-4 lg:flex"
          >
            <Link to="/projects" className="btn-primary">
              Selected work
            </Link>
            <Link to="/contact" className="btn-ghost">
              Get in touch
            </Link>
          </motion.div>

          <SkillOrbit />
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee__track">
          Pawan Kumar — Front-End Developer — React · React Native · TypeScript — Apollo · Fudu · GNA —&nbsp;
          Pawan Kumar — Front-End Developer — React · React Native · TypeScript — Apollo · Fudu · GNA —&nbsp;
        </div>
      </div>

      <section className="page !pt-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="section-head">Selected work</h2>
          <Link to="/projects" className="btn-ghost hidden sm:inline-flex">
            View all
          </Link>
        </div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              {...fadeUpView}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link to="/projects" className="work-line group">
                {project.title}
              </Link>
              <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 pb-2 text-[var(--step-small)] text-[var(--muted)]">
                <span>{project.tech}</span>
                <span>{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section
        className="grid gap-10 bg-[var(--surface)] py-24 md:grid-cols-12"
        style={{ paddingInline: "var(--page-pad)" }}
      >
        <motion.p
          {...fadeUpView}
          className="text-[var(--step-lead)] leading-snug text-[var(--ink)] md:col-span-7"
        >
          I build React and React Native products with clear hierarchy, fast feedback,
          and code that stays maintainable as the product grows.
        </motion.p>
        <motion.div
          {...fadeUpView}
          transition={{ delay: 0.1 }}
          className="flex flex-col justify-end gap-4 md:col-span-4 md:col-start-9"
        >
          <p className="text-[var(--step-small)] text-[var(--muted)]">
            Based in India · Available for work
          </p>
          <Link to="/about" className="btn-ghost w-fit">
            About me
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Home;
