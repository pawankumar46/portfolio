import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Contact = () => {
    return (
      <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-primary-700 to-secondary-700 text-transparent bg-clip-text mb-8">
        Contact Me
      </h1>
      <p className="mt-4 text-xl text-gray-800 dark:text-gray-200 font-medium mb-8">
        Feel free to reach out for collaboration or job opportunities.
      </p>

      <div className="flex flex-col items-center mt-6 space-y-6">
        <a
          href="tel:+919611151935"
          className="text-lg text-primary-600 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"
        >
          📞 +91 96111 51935
        </a>

        <a
          href="mailto:pawanpk552@gmail.com"
          className="text-lg text-primary-600 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2"  >
          📧 pawanpk552@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/pawan-kumar-m-77511b142"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-primary-600 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2" >
          <FaLinkedinIn className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/pawankumar46"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg text-primary-600 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2">
          <FaGithub className="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
    );
  };
  
  export default Contact;