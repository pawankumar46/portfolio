import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { site } from "../data/portfolio";
import { scrollToTarget } from "../lib/scroll";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = `${site.name} — ${site.role}`;
    if (!hash) return;
    const id = window.setTimeout(() => scrollToTarget(hash), 350);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <PageTransition>
      <Hero />
      <Work />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </PageTransition>
  );
};

export default Home;
