// src/components/Portfolio.jsx
import React from "react";

const projects = [
  {
    id: 1,
    title: "Project 1",
    description: "Project 1 description",
    imgSrc: "/assets/images/project1.jpg",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Project 2 description",
    imgSrc: "/assets/images/project2.jpg",
  },
  // Agrega más proyectos aquí...
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
