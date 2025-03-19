import React from "react";

import { FaReact, FaJsSquare, FaCss3Alt, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiRedux, SiTailwindcss, SiNextdotjs, SiReact } from "react-icons/si";
import { motion } from "framer-motion";

const skillData = [
  { name: "React.js", icon: <FaReact className="text-cyan-400 text-3xl" /> },
  { name: "React Native", icon: <SiReact className="text-blue-400 text-3xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-900 bg-white p-1 rounded text-3xl" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400 text-3xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-3xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-600 text-3xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-3xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-600 text-3xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-3xl" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-600 text-3xl" /> },
];

const Skills = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Skills</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {skillData.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 text-white flex flex-col items-center justify-center gap-2 p-6 rounded-lg shadow-md text-lg transition-all duration-300"
          >
            {skill.icon}
            <span>{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;