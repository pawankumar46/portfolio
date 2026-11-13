import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import Card from "../components/Card";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { about, site } from "../data/portfolio";

const CountUp = ({ value, decimals, suffix }: { value: number; decimals: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const TiltPhoto = () => {
  const reduce = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [10, -10]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-10, 10]), { stiffness: 150, damping: 18 });
  const shineX = useTransform(px, [0, 1], ["0%", "100%"]);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };

  const reset = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <div style={{ perspective: 1000 }} onMouseMove={onMove} onMouseLeave={reset}>
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-night"
      >
        {about.photo ? (
          <img
            src={about.photo}
            alt={about.photoAlt}
            loading="lazy"
            decoding="async"
            width={800}
            height={1000}
            className="h-full w-full object-cover"
          />
        ) : (
          <div
            role="img"
            aria-label={about.photoAlt}
            className="flex h-full w-full items-end p-8"
            style={{
              backgroundImage:
                "radial-gradient(70% 60% at 30% 25%, rgba(124,58,237,0.75), transparent 70%), radial-gradient(60% 50% at 80% 85%, rgba(255,77,109,0.5), transparent 70%)",
            }}
          >
            <span className="font-display text-[clamp(5rem,14vw,10rem)] font-bold leading-none text-lime">
              PK
            </span>
          </div>
        )}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-1/2 bg-white/10 blur-2xl"
          style={{ left: shineX, translateX: "-50%" }}
        />
      </motion.div>
    </div>
  );
};

const About = () => (
  <Section
    id="about"
    labelledBy="about-title"
    glows={<div className="glow glow-violet -right-40 top-20 h-[60vh] w-[60vh]" />}
  >
    <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
      <Reveal className="lg:col-span-5">
        <TiltPhoto />
      </Reveal>

      <div className="lg:col-span-6 lg:col-start-7">
        <Reveal>
          <h2
            id="about-title"
            className="font-display text-[clamp(2.5rem,5.5vw,5rem)] font-semibold leading-[0.95]"
          >
            {about.heading}
          </h2>
        </Reveal>
        {about.bio.map((para, i) => (
          <Reveal key={i} delay={0.08 + i * 0.06}>
            <p className={`mt-6 text-lg ${i === 0 ? "text-white" : "text-mist"}`}>{para}</p>
          </Reveal>
        ))}
        <ul className="mt-12 grid gap-4 sm:grid-cols-3">
          {about.stats.map((stat, i) => (
            <li key={stat.label}>
              <Reveal delay={0.1 + i * 0.08} className="h-full">
                <Card className="h-full p-6">
                  <p className="font-display text-5xl font-bold text-white">
                    <CountUp value={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-mist">{stat.label}</p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
        {site.available && (
          <p className="mt-8 text-[15px] text-mist">
            Based in {site.city} · <span className="text-lime">open to new roles</span>
          </p>
        )}
      </div>
    </div>
  </Section>
);

export default About;
