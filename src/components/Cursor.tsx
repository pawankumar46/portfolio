import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../lib/useMediaQuery";

type Mode = "default" | "link" | "view";

const Cursor = () => {
  const fine = useMediaQuery("(pointer: fine)");
  const reduce = useReducedMotion();
  const enabled = fine && !reduce;
  const [mode, setMode] = useState<Mode>("default");
  const [visible, setVisible] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);
  const x = useSpring(mx, { stiffness: 500, damping: 40, mass: 0.5 });
  const y = useSpring(my, { stiffness: 500, damping: 40, mass: 0.5 });

  useEffect(() => {
    if (!enabled) return;
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      setVisible(true);
      const target = e.target as HTMLElement | null;
      if (target?.closest("[data-cursor='view']")) setMode("view");
      else if (target?.closest("a, button, [role='button'], input, textarea, label")) setMode("link");
      else setMode("default");
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove);
    document.addEventListener("pointerleave", onLeave);
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled, mx, my]);

  if (!enabled) return null;

  const size = mode === "view" ? 96 : mode === "link" ? 56 : 14;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[100] flex items-center justify-center rounded-full"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
        mixBlendMode: mode === "view" ? "normal" : "difference",
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        backgroundColor: mode === "view" ? "#C6F432" : "#ffffff",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 26 }}
    >
      <AnimatePresence>
        {mode === "view" && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            className="font-display text-sm font-semibold text-ink"
          >
            View
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Cursor;
