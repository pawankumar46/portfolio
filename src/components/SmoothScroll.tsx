import Lenis from "lenis";
import { useReducedMotion } from "framer-motion";
import { useEffect } from "react";
import { setLenis } from "../lib/scroll";

const SmoothScroll = () => {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    setLenis(lenis);

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      setLenis(null);
    };
  }, [reduce]);

  return null;
};

export default SmoothScroll;
