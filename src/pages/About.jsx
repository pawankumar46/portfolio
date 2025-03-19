import React from "react"

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 text-transparent bg-clip-text mb-8">
        About Me
      </h1>
      
      <div className="space-y-6 text-gray-700 dark:text-gray-300">
        <p className="text-lg leading-relaxed">
          I am a passionate <span className="font-semibold text-gray-900 dark:text-white">Front-End Developer</span> with 
          <span className="font-semibold text-gray-900 dark:text-white"> 2.5 years</span> of experience specializing in 
          <span className="font-semibold text-gray-900 dark:text-white"> React.js, React Native, and TypeScript</span>.  
          I love crafting intuitive and pixel-perfect user interfaces while following UI/UX 
          best practices. My expertise includes state management with Redux, API 
          integration, and performance optimization.  
        </p>

        <p className="text-lg leading-relaxed">
          I have worked on multiple scalable applications, improving performance, reducing 
          bounce rates, and optimizing API calls. My goal is to write clean, reusable, and 
          maintainable code that enhances user experience and application efficiency.
        </p>

        <p className="text-lg leading-relaxed">
          Currently, I am exploring advanced front-end technologies to build modern, 
          high-performance web applications.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Modern React.js & React Native</li>
                <li>• TypeScript & JavaScript (ES6+)</li>
                <li>• Redux & State Management</li>
                <li>• Responsive Web Design</li>
              </ul>
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                Tools & Technologies
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li>• Git & Version Control</li>
                <li>• REST APIs & GraphQL</li>
                <li>• Testing (Jest, React Testing Library)</li>
                <li>• CI/CD & Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;