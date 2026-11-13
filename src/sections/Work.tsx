import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ProjectCover from "../components/ProjectCover";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { projects } from "../data/portfolio";

const layout = [
  "lg:col-span-7 lg:row-span-2",
  "lg:col-span-5",
  "lg:col-span-5",
  "lg:col-span-12",
  "lg:col-span-6",
  "lg:col-span-6",
];

const coverHeight = [
  "aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[34rem]",
  "aspect-[16/10]",
  "aspect-[16/10]",
  "aspect-[16/10] lg:aspect-[21/8]",
  "aspect-[16/10]",
  "aspect-[16/10]",
];

const Work = () => (
  <Section
    id="work"
    title="Selected work"
    intro="A few products I've helped design and ship, and what changed because of them."
    glows={<div className="glow glow-coral -left-40 top-1/3 h-[60vh] w-[60vh]" />}
  >
    <ul className="grid gap-5 lg:grid-cols-12 lg:gap-6">
      {projects.map((project, i) => (
        <li key={project.slug} className={`${layout[i] ?? "lg:col-span-6"} flex`}>
          <Reveal delay={(i % 3) * 0.08} className="flex w-full">
            <Link
              to={`/work/${project.slug}`}
              data-cursor="view"
              className="group flex w-full flex-col"
              aria-label={`${project.title}: ${project.outcome} Read the case study`}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="glass flex h-full w-full flex-col overflow-hidden rounded-[1.75rem] p-2"
              >
                <div className={`overflow-hidden rounded-[1.4rem] ${coverHeight[i] ?? "aspect-[16/10]"}`}>
                  <div className="h-full w-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]">
                    <ProjectCover project={project} />
                  </div>
                </div>
                <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-1 text-white/80">{project.outcome}</p>
                    <p className="mt-1 text-sm text-mist">
                      {project.client} · {project.year}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2 sm:justify-end">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-white/[0.06] px-3 py-1 text-[13px] text-mist"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);

export default Work;
