import type { ReactNode } from "react";
import Reveal from "./Reveal";

type SectionProps = {
  id: string;
  title?: ReactNode;
  intro?: ReactNode;
  aside?: ReactNode;
  children: ReactNode;
  className?: string;
  glows?: ReactNode;
  labelledBy?: string;
};

const Section = ({ id, title, intro, aside, children, className = "", glows, labelledBy }: SectionProps) => (
  <section
    id={id}
    aria-labelledby={labelledBy ?? (title ? `${id}-title` : undefined)}
    className={`relative isolate py-20 sm:py-24 lg:py-28 ${className}`}
  >
    {glows && <div className="absolute inset-0 -z-10 overflow-hidden">{glows}</div>}
    <div className="page-x mx-auto max-w-page">
      {(title || intro || aside) && (
        <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            {title && (
              <Reveal>
                <h2
                  id={`${id}-title`}
                  className="font-display text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[0.95]"
                >
                  {title}
                </h2>
              </Reveal>
            )}
            {intro && (
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-xl text-lg text-mist">{intro}</p>
              </Reveal>
            )}
          </div>
          {aside && (
            <Reveal delay={0.12} className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">
              {aside}
            </Reveal>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
