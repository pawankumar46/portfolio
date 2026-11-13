import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav, site } from "../data/portfolio";
import { getLenis } from "../lib/scroll";
import SectionLink from "./SectionLink";

const Navbar = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 160 && !open);
    setScrolled(latest > 24);
  });

  useEffect(() => {
    const lenis = getLenis();
    if (open) lenis?.stop();
    else lenis?.start();
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4"
        animate={{ y: hidden ? "-120%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex h-14 max-w-page items-center justify-between rounded-full px-5 transition-colors duration-300 ${
            scrolled || open ? "glass" : "border border-transparent"
          }`}
        >
          <Link to="/" className="font-display text-lg font-semibold tracking-tight">
            {site.name}
            <span className="text-lime">.</span>
          </Link>

          <ul className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <li key={item.href}>
                <SectionLink
                  href={item.href}
                  className="text-sm text-mist transition-colors hover:text-white"
                >
                  {item.label}
                </SectionLink>
              </li>
            ))}
          </ul>

          <SectionLink
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-lime md:inline-flex"
          >
            Hire me
          </SectionLink>

          <button
            type="button"
            className="relative z-10 flex h-11 w-11 items-center justify-center md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="relative block h-3 w-6">
              <motion.span
                className="absolute left-0 top-0 h-0.5 w-6 rounded bg-white"
                animate={open ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 w-6 rounded bg-white"
                animate={open ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col justify-between bg-ink/95 px-6 pb-10 pt-28 backdrop-blur-xl md:hidden"
            initial={{ clipPath: "circle(0% at 100% 0%)" }}
            animate={{ clipPath: "circle(150% at 100% 0%)" }}
            exit={{ clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col gap-2">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06 }}
                >
                  <SectionLink
                    href={item.href}
                    onNavigate={() => setOpen(false)}
                    className="font-display block text-5xl font-semibold leading-tight"
                  >
                    {item.label}
                  </SectionLink>
                </motion.li>
              ))}
            </ul>
            <motion.p
              className="text-mist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
            >
              <a href={`mailto:${site.email}`} className="text-white underline underline-offset-4">
                {site.email}
              </a>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
