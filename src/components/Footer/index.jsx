// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Contact me: john.doe@example.com</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href="https://www.linkedin.com" className="hover:text-gray-400">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com" className="hover:text-gray-400">
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
