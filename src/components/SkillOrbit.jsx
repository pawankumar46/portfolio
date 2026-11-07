import { motion, useReducedMotion } from "framer-motion";

const skills = [
  "React",
  "React Native",
  "TypeScript",
  "Redux",
  "Next.js",
  "Tailwind",
  "Node.js",
  "Git",
];

const SkillOrbit = () => {
  const reduce = useReducedMotion();
  const duration = 28;

  return (
    <motion.div
      className="relative mx-auto aspect-square w-full max-w-[22rem] lg:max-w-[26rem]"
      initial={reduce ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.55, delay: 0.25 }}
      aria-hidden="true"
    >
      <div className="absolute inset-[8%] rounded-full border border-[var(--ink)]/10" />
      <div className="absolute inset-[22%] rounded-full border border-[var(--ink)]/8" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full bg-[var(--field)] text-center text-[var(--field-ink)] sm:h-28 sm:w-28">
          <span className="text-[var(--step-small)] text-[var(--accent)]">Stack</span>
          <span className="text-[0.95rem] font-semibold tracking-tight">Skills</span>
        </div>
      </div>

      <motion.div
        className="absolute inset-[12%] sm:inset-[14%]"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={
          reduce ? undefined : { duration, repeat: Infinity, ease: "linear" }
        }
      >
        {skills.map((skill, i) => {
          const angle = (360 / skills.length) * i - 90;
          const rad = (angle * Math.PI) / 180;
          const x = 50 + Math.cos(rad) * 50;
          const y = 50 + Math.sin(rad) * 50;

          return (
            <motion.span
              key={skill}
              className="absolute whitespace-nowrap bg-[var(--bg)] px-2.5 py-1 text-[0.8rem] font-medium text-[var(--ink)] shadow-[0_0_0_1px_rgba(8,9,11,0.08)] sm:text-[0.9rem]"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                translate: "-50% -50%",
              }}
              animate={reduce ? undefined : { rotate: -360 }}
              transition={
                reduce
                  ? undefined
                  : { duration, repeat: Infinity, ease: "linear" }
              }
            >
              {skill}
            </motion.span>
          );
        })}
      </motion.div>

      <motion.div
        className="absolute inset-0"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={
          reduce ? undefined : { duration: 16, repeat: Infinity, ease: "linear" }
        }
      >
        <span className="absolute left-1/2 top-[6%] h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-[var(--accent)]" />
      </motion.div>
    </motion.div>
  );
};

export default SkillOrbit;
