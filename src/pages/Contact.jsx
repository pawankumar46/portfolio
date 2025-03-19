import React from "react";

const Contact = () => {
    return (
      <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold text-gray-900">Contact Me</h1>
      <p className="mt-4 text-lg text-gray-700">
        Feel free to reach out for collaboration or job opportunities.
      </p>

      <div className="flex flex-col items-center mt-6 space-y-4">
        <a
          href="tel:+919611151935"
          className="text-lg text-gray-900 hover:underline"
        >
          📞 +91 96111 51935
        </a>

        <a
          href="mailto:pawanpk552@gmail.com"
          className="text-lg text-blue-600 hover:underline"
        >
          📧 pawanpk552@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/pawan-kumar-m-77511b142"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-lg text-blue-600 hover:underline"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/pawankumar46"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-lg text-gray-900 hover:underline"
        >
          <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" className="w-6 h-6" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
    );
  };
  
  export default Contact;