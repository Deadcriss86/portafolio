// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm John Doe</h1>
      <p className="text-lg mb-6">I'm a web developer and designer.</p>
      <a
        href="#portfolio"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View My Work
      </a>
    </section>
  );
};

export default Hero;
