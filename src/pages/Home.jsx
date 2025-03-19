import React from "react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 md:px-8"
    >
      {/* Hero Section */}
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-secondary-600 text-transparent bg-clip-text animate-gradient">
          Hi, I'm Pawan Kumar 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A passionate <span className="font-semibold text-primary-600">Front-End Developer</span> crafting 
          beautiful digital experiences with modern web technologies.
        </p>
      </motion.div>

      {/* Skills Pills */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {["React.js", "React Native", "TypeScript", "Redux", "Tailwind CSS"].map((skill, index) => (
          <motion.span
            key={index}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md text-sm md:text-base
                     text-gray-700 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div 
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Link
          to="/projects"
          className="px-8 py-3 bg-primary-600 text-white rounded-full shadow-lg 
                   hover:bg-primary-700 transform hover:-translate-y-1 transition-all duration-300"
        >
          View My Work
        </Link>
        <Link
          to="/contact"
          className="px-8 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white rounded-full 
                   shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700
                   transform hover:-translate-y-1 transition-all duration-300"
        >
          Get in Touch
        </Link>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;