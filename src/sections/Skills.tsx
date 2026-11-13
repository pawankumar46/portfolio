import Card from "../components/Card";
import Reveal from "../components/Reveal";
import Section from "../components/Section";
import { skillGroups } from "../data/portfolio";

const accents = ["bg-violet", "bg-coral", "bg-lime", "bg-white"];

const Skills = () => (
  <Section
    id="skills"
    title="Tools of the trade"
    intro="The stack I reach for to take products from idea to production on web and mobile."
    glows={<div className="glow glow-lime left-1/3 top-1/4 h-[50vh] w-[50vh]" />}
  >
    <div className="grid gap-5 md:grid-cols-2">
      {skillGroups.map((group, i) => (
        <Reveal key={group.title} delay={(i % 2) * 0.08}>
          <Card className="h-full p-7 sm:p-9">
            <h3 className="font-display flex items-center gap-3 text-2xl font-semibold">
              <span className={`h-3 w-3 rounded-full ${accents[i % accents.length]}`} aria-hidden="true" />
              {group.title}
            </h3>
            <ul className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((item) => (
                <li key={item} className="chip glass">
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      ))}
    </div>
  </Section>
);

export default Skills;
