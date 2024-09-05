// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header>
      <header className="bg-gray-800 p-4">
        <nav className="container mx-auto">
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </header>
  );
};

export default Header;
