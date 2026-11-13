import { AnimatePresence, MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import { scrollToTarget } from "./lib/scroll";
import CaseStudy from "./pages/CaseStudy";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) scrollToTarget(0, true);
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <MotionConfig reducedMotion="user">
    <BrowserRouter>
      <SmoothScroll />
      <Cursor />
      <a
        href="#main"
        className="sr-only z-[110] rounded-full bg-lime px-4 py-2 font-medium text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <AnimatedRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  </MotionConfig>
);

export default App;
