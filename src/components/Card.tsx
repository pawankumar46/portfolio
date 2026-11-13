import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className = "" }: CardProps) => (
  <div className={`glass rounded-3xl ${className}`}>{children}</div>
);

export default Card;
