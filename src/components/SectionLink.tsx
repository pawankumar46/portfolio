import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToTarget } from "../lib/scroll";

type SectionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

const SectionLink = ({ href, children, className, onNavigate }: SectionLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <a
      href={`/${href}`}
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onNavigate?.();
        if (location.pathname === "/") scrollToTarget(href);
        else navigate(`/${href}`);
      }}
    >
      {children}
    </a>
  );
};

export default SectionLink;
