import type Lenis from "lenis";

let lenis: Lenis | null = null;

export const setLenis = (instance: Lenis | null) => {
  lenis = instance;
};

export const getLenis = () => lenis;

export const scrollToTarget = (target: string | number, immediate = false) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: typeof target === "string" ? -72 : 0, immediate });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior: immediate ? "auto" : "smooth" });
    return;
  }
  document.querySelector(target)?.scrollIntoView({ behavior: immediate ? "auto" : "smooth" });
};
