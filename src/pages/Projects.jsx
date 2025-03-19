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
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">My Projects</h1>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 transition-all duration-300"
          >
            {/* Project Title */}
            <h2 className="text-2xl font-bold text-gray-900">{project.title}</h2>

            {/* Project Description */}
            <p className="text-gray-700 mt-3">{project.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Link Button */}
            <a
              href={project.link}
              className="inline-block mt-5 bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
            >
              View Project 🚀
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
