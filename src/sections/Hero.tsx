import {
  AnimatePresence,
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import Button from "../components/Button";
import { hero, marquee, site } from "../data/portfolio";
import { scrollToTarget } from "../lib/scroll";

const RotatingRole = () => {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % hero.roles.length), 2400);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <span className="relative inline-flex h-[1.5em] overflow-hidden align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={hero.roles[index]}
          className="whitespace-nowrap font-medium text-lime"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {hero.roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

const Marquee = () => {
  const items = [...marquee, ...marquee];
  return (
    <div className="marquee relative overflow-hidden bg-night py-5" aria-label="Technologies I work with">
      <ul className="marquee-track">
        {items.map((item, i) => (
          <li
            key={`${item}-${i}`}
            aria-hidden={i >= marquee.length}
            className="font-display flex items-center gap-8 pr-8 text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-white/80"
          >
            {item}
            <span className="h-2.5 w-2.5 rounded-full bg-coral" aria-hidden="true" />
          </li>
        ))}
      </ul>
    </div>
  );
};

const Blob = () => {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const slow = { stiffness: 30, damping: 18, mass: 1.2 };
  const fast = { stiffness: 70, damping: 20 };
  const sx = useSpring(px, slow);
  const sy = useSpring(py, slow);
  const fx = useSpring(px, fast);
  const fy = useSpring(py, fast);

  const violetX = useTransform(sx, (v) => `${v * 14}vw`);
  const violetY = useTransform(sy, (v) => `${v * 12}vh`);
  const coralX = useTransform(sx, (v) => `${v * -10}vw`);
  const coralY = useTransform(sy, (v) => `${v * -8}vh`);
  const limeX = useTransform(fx, (v) => `${v * 22}vw`);
  const limeY = useTransform(fy, (v) => `${v * 18}vh`);
  const rotate = useTransform(sx, [-1, 1], [-25, 25]);

  useEffect(() => {
    if (reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      px.set((e.clientX / window.innerWidth) * 2 - 1);
      py.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, px, py]);

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="blob blob-violet right-[-6%] top-[-18%] h-[48vmax] w-[48vmax]"
        style={{ x: violetX, y: violetY, rotate }}
      />
      <motion.div
        className="blob blob-coral right-[18%] top-[22%] h-[30vmax] w-[30vmax]"
        style={{ x: coralX, y: coralY }}
      />
      <motion.div
        className="blob blob-lime right-[8%] top-[30%] h-[14vmax] w-[14vmax]"
        style={{ x: limeX, y: limeY }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink to-transparent" />
    </div>
  );
};

const chars: Variants = {
  hidden: { y: "115%", rotate: 12, opacity: 0 },
  shown: (i: number) => ({
    y: "0%",
    rotate: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 320, damping: 24, mass: 0.8, delay: 0.25 + i * 0.03 },
  }),
};

const SplitHeadline = ({ text }: { text: string }) => {
  const words = text.split(" ");
  let count = 0;

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((word, w) => (
          <span key={w} className="inline-block whitespace-nowrap">
            <span className="inline-block overflow-hidden pb-[0.1em] align-bottom">
              {[...word].map((ch) => {
                const i = count++;
                return (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={chars}
                    className={`inline-block origin-bottom-left ${w === words.length - 1 ? "text-coral" : ""}`}
                  >
                    {ch}
                  </motion.span>
                );
              })}
            </span>
            {w < words.length - 1 && "\u00a0"}
          </span>
        ))}
      </span>
    </>
  );
};

const ScrollCue = () => {
  const onClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    scrollToTarget("#work");
  };

  return (
    <a
      href="#work"
      onClick={onClick}
      aria-label="Scroll to selected work"
      className="group flex flex-col items-center gap-3 text-[13px] text-mist transition-colors hover:text-white"
    >
      <span className="relative flex h-11 w-7 justify-center rounded-full bg-white/10 pt-2">
        <span className="scroll-pulse absolute inset-0 rounded-full" />
        <span className="scroll-dot h-2 w-1 rounded-full bg-lime" />
      </span>
      Scroll
    </a>
  );
};

const Hero = () => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const charCount = hero.headline.replace(/\s/g, "").length;

  return (
    <section ref={ref} id="top" className="relative isolate overflow-hidden">
      <Blob />

      <div className="page-x relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-end pb-14 pt-32 lg:pb-28">
        <motion.p
          className="mb-8 max-w-xl text-lg text-mist sm:text-xl"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          {site.name} is a <RotatingRole />
          <br />
          based in {site.city}.
        </motion.p>

        <motion.h1
          style={{ y: headlineY, opacity: fade }}
          initial={reduce ? false : "hidden"}
          animate="shown"
          className="font-display text-[clamp(2.5rem,10vw,10.5rem)] font-bold leading-[0.9] tracking-[-0.03em]"
        >
          <SplitHeadline text={hero.headline} />
        </motion.h1>

        <motion.div
          className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 + charCount * 0.03, duration: 0.6 }}
        >
          <p className="max-w-md text-lg text-white/85">{hero.intro}</p>
          <div className="flex flex-wrap items-center gap-4">
            <Button href={hero.primaryCta.href} magnetic>
              {hero.primaryCta.label}
              <span aria-hidden="true">↓</span>
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 + charCount * 0.03, duration: 0.6 }}
        >
          <ScrollCue />
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
};

export default Hero;
