import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-24 border rounded-md border-gray-950">
      <div className="container mx-auto px-4 flex  flex-col sm:flex-row space-x-4 justify-center items-center">
        <div className="mb-4 sm:mb-0 text-center sm:text-left">
          <h4 className="text-lg font-semibold">Anwar Gashaw</h4>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/reyan2541"
            className="hover:text-gray-400"
            aria-label="GitHub"
          >
            <FaGithub size={24} className="text-green-400" />
          </a>
          <a
            href="https://www.linkedin.com/in/anwar-gashaw-yimam-518335260/"
            className="hover:text-gray-400"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} className="text-green-400" />
          </a>
          <a
            href="mailto:anathe2541@gmail.com"
            className="hover:text-gray-400"
            aria-label="Email"
          >
            <FaEnvelope size={24} className="text-green-400" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
