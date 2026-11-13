import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { experience } from "../data/portfolio";

const Experience = () => {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });

  return (
    <Section
      id="experience"
      title="Experience"
      intro="4.5 years across product teams, from first component library to apps used by hundreds every day."
    >
      <div className="relative ml-2 max-w-4xl sm:ml-4">
        <motion.div
          className="absolute -left-px top-0 h-full w-0.5 origin-top rounded-full bg-gradient-to-b from-lime via-violet to-coral"
          style={{ scaleY: scrollYProgress }}
          aria-hidden="true"
        />
        <ol ref={ref}>
        {experience.map((item, i) => (
          <li key={`${item.period}-${item.role}`} className="relative pb-14 pl-10 last:pb-0 sm:pl-14">
            <span
              className={`absolute -left-[7px] top-2 h-[15px] w-[15px] rounded-full border-2 border-ink ${
                i === 0 ? "bg-lime" : "bg-white/40"
              }`}
              aria-hidden="true"
            />
            <Reveal>
              <h3 className="font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight">
                {item.role}
                <span className="text-mist"> · {item.company}</span>
              </h3>
              <p className="mt-1 text-[15px] font-medium text-lime">{item.period}</p>
              <p className="mt-3 max-w-2xl text-lg text-white/80">{item.summary}</p>
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  );
};

export default Experience;
