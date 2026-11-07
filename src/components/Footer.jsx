import React from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";

const Footer = () => {
  const reduce = useReducedMotion();

  return (
    <footer className="mt-0 min-h-[80svh] bg-[var(--field)] text-[var(--field-ink)]">
      <div
        className="mx-auto flex min-h-[80svh] max-w-[100rem] flex-col justify-between py-12"
        style={{ paddingInline: "var(--page-pad)" }}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          <div>
            <p className="mb-2 font-medium">Pawan Kumar</p>
            <p className="text-[var(--step-small)] text-[var(--field-ink)]/55">Front-end developer</p>
            <p className="text-[var(--step-small)] text-[var(--field-ink)]/55">India</p>
          </div>
          <div>
            <p className="mb-2 font-medium">Navigate</p>
            <ul className="space-y-1 text-[var(--step-small)] text-[var(--field-ink)]/55">
              <li><Link to="/projects" className="hover:text-[var(--accent)]">Work</Link></li>
              <li><Link to="/about" className="hover:text-[var(--accent)]">About</Link></li>
              <li><Link to="/skills" className="hover:text-[var(--accent)]">Skills</Link></li>
              <li><Link to="/contact" className="hover:text-[var(--accent)]">Contact</Link></li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium">Social</p>
            <ul className="space-y-1 text-[var(--step-small)] text-[var(--field-ink)]/55">
              <li>
                <a href="https://github.com/pawankumar46" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/pawan-kumar-m-77511b142" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--accent)]">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-2 font-medium">Contact</p>
            <ul className="space-y-1 text-[var(--step-small)] text-[var(--field-ink)]/55">
              <li>
                <a href="mailto:pawanpk552@gmail.com" className="hover:text-[var(--accent)]">
                  Email
                </a>
              </li>
              <li>
                <a href="tel:+919611151935" className="hover:text-[var(--accent)]">
                  Call
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="pt-20">
          <motion.p
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="w-full overflow-hidden whitespace-nowrap font-semibold leading-none tracking-[-0.05em]"
            style={{ fontSize: "clamp(2rem, 7vw, 5.5rem)" }}
          >
            Pawan Kumar
          </motion.p>
          <p className="mt-4 text-[var(--step-small)] text-[var(--field-ink)]/45">
            © {new Date().getFullYear()} Pawan Kumar
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
