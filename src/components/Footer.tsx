import { site, socials } from "../data/portfolio";

const Footer = () => (
  <footer className="page-x relative overflow-hidden pb-8 pt-16">
    <div className="mx-auto max-w-page">
      <div className="flex flex-col gap-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with React, TypeScript and Framer Motion.
        </p>
        <ul className="flex gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <p
        aria-hidden="true"
        className="font-display mt-10 select-none whitespace-nowrap text-center text-[clamp(3rem,15vw,15rem)] font-bold leading-[0.8] text-white/[0.06]"
      >
        {site.name}
      </p>
    </div>
  </footer>
);

export default Footer;
