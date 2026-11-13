import { motion } from "framer-motion";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import PageTransition from "../components/PageTransition";
import ProjectCover from "../components/ProjectCover";
import Reveal from "../components/Reveal";
import { projects, site } from "../data/portfolio";
import NotFound from "./NotFound";

const CaseStudy = () => {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  const project = projects[index];

  useEffect(() => {
    if (project) document.title = `${project.title} case study — ${site.name}`;
  }, [project]);

  if (!project) return <NotFound />;

  const next = projects[(index + 1) % projects.length];

  return (
    <PageTransition>
      <article className="relative isolate overflow-hidden pb-24 pt-32 sm:pt-40">
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="glow glow-violet left-[-10%] top-0 h-[60vh] w-[60vh]" />
          <div className="glow glow-coral right-[-10%] top-[40%] h-[50vh] w-[50vh]" />
        </div>

        <div className="page-x mx-auto max-w-page">
          <Link to="/#work" className="text-sm text-mist transition-colors hover:text-white">
            ← All work
          </Link>

          <header className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <p className="text-violet-soft">
                {project.client} · {project.year}
              </p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display mt-4 text-[clamp(3rem,9vw,8.5rem)] font-bold leading-[0.9]"
              >
                {project.title}
              </motion.h1>
            </div>
            <p className="text-xl text-white/85 lg:col-span-4">{project.outcome}</p>
          </header>

          <Reveal className="mt-14">
            <div className="aspect-[16/9] overflow-hidden rounded-[2rem] border border-white/10">
              <ProjectCover project={project} />
            </div>
          </Reveal>

          <div className="mt-20 grid gap-14 lg:grid-cols-12">
            <div className="space-y-14 lg:col-span-7">
              <Reveal>
                <h2 className="font-display text-3xl font-semibold">The problem</h2>
                <p className="mt-4 text-lg text-white/80">{project.problem}</p>
              </Reveal>
              <Reveal>
                <h2 className="font-display text-3xl font-semibold">The solution</h2>
                <p className="mt-4 text-lg text-white/80">{project.solution}</p>
              </Reveal>
            </div>

            <aside className="space-y-5 lg:col-span-4 lg:col-start-9">
              <Reveal>
                <Card className="p-7">
                  <h2 className="font-display text-xl font-semibold">Stack</h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((s) => (
                      <li key={s} className="chip glass text-sm">
                        {s}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
              <Reveal delay={0.08}>
                <Card className="p-7">
                  <h2 className="font-display text-xl font-semibold">Results</h2>
                  <ul className="mt-4 space-y-3">
                    {project.results.map((r) => (
                      <li key={r} className="flex gap-3 text-white/85">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-lime" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            </aside>
          </div>

          <Reveal className="mt-28">
            <Link
              to={`/work/${next.slug}`}
              data-cursor="view"
              className="group block rounded-[2rem] border border-white/10 p-8 transition-colors hover:border-white/30 sm:p-12"
            >
              <p className="text-sm text-mist">Next project</p>
              <p className="font-display mt-3 text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] transition-colors group-hover:text-lime">
                {next.title} <span aria-hidden="true">→</span>
              </p>
            </Link>
          </Reveal>

          <div className="mt-16 flex justify-center">
            <Button href="/#contact" variant="ghost">
              Start a project together
            </Button>
          </div>
        </div>
      </article>
    </PageTransition>
  );
};

export default CaseStudy;
