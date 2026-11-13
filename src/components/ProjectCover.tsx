import type { Project } from "../data/portfolio";

const palettes = {
  violet: { glow: "rgba(124,58,237,0.7)", glow2: "rgba(255,77,109,0.35)", ink: "#C6F432" },
  coral: { glow: "rgba(255,77,109,0.7)", glow2: "rgba(124,58,237,0.4)", ink: "#ffffff" },
  lime: { glow: "rgba(198,244,50,0.45)", glow2: "rgba(124,58,237,0.45)", ink: "#C6F432" },
};

type ProjectCoverProps = {
  project: Project;
  className?: string;
};

const ProjectCover = ({ project, className = "" }: ProjectCoverProps) => {
  if (project.cover) {
    return (
      <img
        src={project.cover}
        alt={`${project.title} cover`}
        loading="lazy"
        decoding="async"
        width={1600}
        height={1000}
        className={`h-full w-full object-cover ${className}`}
      />
    );
  }

  const p = palettes[project.accent];

  return (
    <div
      role="img"
      aria-label={`${project.title}: ${project.metric.value} ${project.metric.label}`}
      className={`relative h-full w-full overflow-hidden bg-night ${className}`}
      style={{
        backgroundImage: `radial-gradient(60% 70% at 20% 20%, ${p.glow}, transparent 70%), radial-gradient(50% 60% at 85% 90%, ${p.glow2}, transparent 70%)`,
      }}
    >
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <p
          className="font-display text-[clamp(3rem,7vw,7rem)] font-bold leading-[0.85]"
          style={{ color: p.ink }}
        >
          {project.metric.value}
        </p>
        <p className="mt-2 text-[15px] font-medium text-white/85">{project.metric.label}</p>
      </div>
    </div>
  );
};

export default ProjectCover;
