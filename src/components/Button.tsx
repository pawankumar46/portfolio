import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { scrollToTarget } from "../lib/scroll";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "ghost";
  magnetic?: boolean;
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

const variants = {
  primary: "bg-lime text-ink hover:bg-white",
  ghost: "glass text-white hover:border-white/30",
};

const Button = ({
  children,
  href,
  type = "button",
  variant = "primary",
  magnetic = false,
  className = "",
  onClick,
  external,
}: ButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 15, mass: 0.4 });

  const onMove = (e: MouseEvent) => {
    if (!magnetic || reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };

  const onLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = `inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 font-medium transition-colors duration-200 ${variants[variant]} ${className}`;

  const inner = (() => {
    if (href?.startsWith("#")) {
      return (
        <a
          href={href}
          className={classes}
          onClick={(e) => {
            e.preventDefault();
            scrollToTarget(href);
            onClick?.();
          }}
        >
          {children}
        </a>
      );
    }
    if (href && !external && href.startsWith("/")) {
      return (
        <Link to={href} className={classes} onClick={onClick}>
          {children}
        </Link>
      );
    }
    if (href) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <button type={type} className={classes} onClick={onClick}>
        {children}
      </button>
    );
  })();

  return (
    <motion.div
      ref={ref}
      className="inline-block"
      style={magnetic ? { x, y } : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      whileTap={{ scale: 0.97 }}
    >
      {inner}
    </motion.div>
  );
};

export default Button;
