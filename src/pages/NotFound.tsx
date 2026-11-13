import { useEffect } from "react";
import Button from "../components/Button";
import PageTransition from "../components/PageTransition";
import { site } from "../data/portfolio";

const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found — ${site.name}`;
  }, []);

  return (
    <PageTransition>
      <section className="page-x mx-auto flex min-h-[80svh] max-w-page flex-col justify-center pt-24">
        <h1 className="font-display text-[clamp(4rem,14vw,12rem)] font-bold leading-[0.9]">
          Lost<span className="text-coral">?</span>
        </h1>
        <p className="mt-6 max-w-md text-lg text-mist">
          This page doesn't exist, but the rest of the site does.
        </p>
        <div className="mt-10">
          <Button href="/">Back home</Button>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;
