import React from "react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8 text-center">
    {/* Animated Heading */}
    <motion.h1
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl font-extrabold text-gray-900"
    >
      Hi, I'm <span className="text-blue-600">Pawan Kumar</span> 👋
    </motion.h1>

    {/* Animated Subheading */}
    <motion.p
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="mt-4 text-xl text-gray-700 max-w-2xl"
    >
      A passionate <span className="font-semibold">Front-End Developer</span> specializing in 
      <span className="font-semibold"> React.js, React Native, and TypeScript</span>.  
      I love building modern, responsive, and high-performance applications.
    </motion.p>

    {/* Animated Skills Showcase */}
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-wrap justify-center gap-4 mt-6"
    >
      {["React.js", "React Native", "JavaScript", "TypeScript", "Redux", "Tailwind CSS"].map((skill, index) => (
  <motion.span
    key={index}
    whileHover={{ scale: 1.1 }} // Scale effect on hover
    className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md text-lg transition-all duration-300"
  >
    {skill}
  </motion.span>
))}
    </motion.div>

    {/* Animated Call-to-Action (CTA) */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: 1 }}
      className="mt-8"
    >
      <Link
        to="/projects"
        className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        View My Work 🚀
      </Link>
    </motion.div>
  </div>
  );
};

export default Home;