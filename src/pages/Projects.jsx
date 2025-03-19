import React from "react"
import { motion } from "framer-motion";

const projects = [
  {
    title: "Apollo – Internal Communication & Task Management App",
    description:
      "Developed a React Native app for 500+ employees to streamline internal communication and task management, improving workflow efficiency by 35%.",
    tech: ["React Native", "TypeScript", "Redux"],
    link: "#",
  },
  {
    title: "Fudu – Food Delivery App",
    description:
      "Built a real-time food delivery app with live order tracking and restaurant integration, increasing user engagement and reducing load times by 30%.",
    tech: ["React Native", "Redux", "JavaScript"],
    link: "#",
  },
  {
    title: "Greater National Advocates",
    description:
      "Enhanced state management with Redux, reducing API call redundancy by 40% and improving debugging efficiency by 30%.",
    tech: ["React.js", "Redux", "JavaScript"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 text-transparent bg-clip-text text-center mb-12">
        My Projects
      </h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="group bg-white/80 backdrop-blur-sm hover:bg-white/95 
                     shadow-lg hover:shadow-xl rounded-2xl p-6 
                     border border-gray-100 transition-all duration-300"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-bold text-gray-800 group-hover:text-primary-600 
                         transition-colors duration-300 mb-4">
              {project.title}
            </h2>

            {/* Project Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, idx) => (
                <span 
                  key={idx} 
                  className="px-3 py-1 bg-primary-50 text-primary-600 
                           rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
