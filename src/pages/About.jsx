import React from "react"

const About = () => {
    return (
      <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
      <p className="mt-4 text-lg text-gray-700">
        I am a passionate <span className="font-semibold">Front-End Developer</span> with 
        <span className="font-semibold"> 2.5 years</span> of experience specializing in 
        <span className="font-semibold"> React.js, React Native, and TypeScript</span>.  
        I love crafting intuitive and pixel-perfect user interfaces while following UI/UX 
        best practices. My expertise includes state management with Redux, API 
        integration, and performance optimization.  
      </p>

      <p className="mt-4 text-lg text-gray-700">
        I have worked on multiple scalable applications, improving performance, reducing 
        bounce rates, and optimizing API calls. My goal is to write clean, reusable, and 
        maintainable code that enhances user experience and application efficiency.
      </p>

      <p className="mt-4 text-lg text-gray-700">
        Currently, I am exploring advanced front-end technologies to build modern, 
        high-performance web applications.
      </p>
    </div>

    );
  };
  
  export default About;