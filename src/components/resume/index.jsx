import React from "react";
import {
  FaUniversity,
  FaBriefcase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaSass,
  FaLinux,
  FaNetworkWired,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiExpress } from "react-icons/si";

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      {/* Sección de Educación */}
      <h2 className="text-3xl font-bold mb-6">Formación Académica</h2>
      <div className="space-y-8">
        {/* Universidad Valle del Grijalva */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaUniversity className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">
                Universidad Valle del Grijalva
              </h3>
              <span className="text-yellow-500">2019 — 2022</span>
              <p className="text-gray-300 mt-2">
                Graduado en Ingeniería en Sistemas Computacionales, adquirí un
                conocimiento profundo en el desarrollo de software, gestión de
                redes y mantenimiento de infraestructura tecnológica. Mi
                formación técnica me permitió desarrollar habilidades en
                programación, optimización de sistemas y diseño de soluciones
                eficientes.
              </p>
            </div>
          </div>
        </div>

        {/* Kodemia.mx */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaUniversity className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Kodemia.mx</h3>
              <span className="text-yellow-500">2023 — 2024</span>
              <p className="text-gray-300 mt-2">
                Programa intensivo de Full Stack Development. Aquí consolidé mi
                experiencia en desarrollo web, trabajando con tecnologías como
                React, Node.js, MongoDB y MySQL, creando aplicaciones completas
                desde el front-end hasta el back-end, con un enfoque en
                soluciones escalables y mantenibles.
              </p>
            </div>
          </div>
        </div>

        {/* Harmon Hall */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaUniversity className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Harmon Hall</h3>
              <span className="text-yellow-500">2023 — 2024</span>
              <p className="text-gray-300 mt-2">
                Estudiante de inglés en nivel B2, mejorando mis habilidades de
                comunicación para proyectos internacionales y colaboraciones con
                equipos multiculturales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Experiencia Profesional */}
      <h2 className="text-3xl font-bold mb-6 mt-12">Experiencia Profesional</h2>
      <div className="space-y-8">
        {/* Ingenio Azucarero de Huixtla */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">
                Ingenio Azucarero de Huixtla
              </h3>
              <span className="text-yellow-500">2018 — 2019</span>
              <p className="text-gray-300 mt-2">
                Responsable del mantenimiento de equipos de cómputo y gestión de
                redes. Lideré proyectos de optimización tecnológica, incluyendo
                la actualización y el mantenimiento de la página web
                corporativa, asegurando su rendimiento y seguridad.
              </p>
            </div>
          </div>
        </div>

        {/* Protección Civil Huixtla */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">
                Protección Civil Huixtla
              </h3>
              <span className="text-yellow-500">2019 — 2020</span>
              <p className="text-gray-300 mt-2">
                Encargado del mantenimiento y ensamble de equipos de cómputo,
                así como de la gestión de redes y soporte técnico. Contribuí a
                la creación y mantenimiento del sitio web institucional,
                mejorando su funcionalidad y accesibilidad.
              </p>
            </div>
          </div>
        </div>

        {/* Protección Civil Tuxtla */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Protección Civil Tuxtla</h3>
              <span className="text-yellow-500">2022 — 2023</span>
              <p className="text-gray-300 mt-2">
                Especialista en equipos de alta gama, redes y cableado
                estructurado. Implementé soluciones web utilizando HTML, CSS y
                React, y participé en la creación de contenido de streaming para
                difusión de información de emergencia.
              </p>
            </div>
          </div>
        </div>

        {/* Nexodesk */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={40} />
            <div>
              <h3 className="text-xl font-semibold">Nexodesk</h3>
              <span className="text-yellow-500">2023 — 2024</span>
              <p className="text-gray-300 mt-2">
                Desarrollador web Full Stack. Mantenimiento y creación de
                páginas utilizando React, Vite y Tailwind CSS. También gestioné
                la creación de APIs con bases de datos MySQL, asegurando la
                eficiencia y escalabilidad de las aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Habilidades */}
      <h2 className="text-3xl font-bold mb-6 mt-12">Habilidades</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
        <li className="flex items-center">
          <FaHtml5 className="text-red-500 mr-2" size={30} /> HTML
        </li>
        <li className="flex items-center">
          <FaCss3Alt className="text-blue-500 mr-2" size={30} /> CSS
        </li>
        <li className="flex items-center">
          <FaJsSquare className="text-yellow-500 mr-2" size={30} /> JavaScript
        </li>
        <li className="flex items-center">
          <FaGitAlt className="text-orange-500 mr-2" size={30} /> Git - GitHub
        </li>
        <li className="flex items-center">
          <FaBootstrap className="text-purple-500 mr-2" size={30} /> Bootstrap
        </li>
        <li className="flex items-center">
          <SiTailwindcss className="text-teal-500 mr-2" size={30} /> TailwindCSS
        </li>
        <li className="flex items-center">
          <FaReact className="text-cyan-500 mr-2" size={30} /> React
        </li>
        <li className="flex items-center">
          <FaNodeJs className="text-green-500 mr-2" size={30} /> Node.js
        </li>
        <li className="flex items-center">
          <SiMysql className="text-blue-500 mr-2" size={30} /> MySQL
        </li>
        <li className="flex items-center">
          <SiMongodb className="text-green-500 mr-2" size={30} /> MongoDB
        </li>
        <li className="flex items-center">
          <FaSass className="text-pink-500 mr-2" size={30} /> Sass
        </li>
        <li className="flex items-center">
          <FaLinux className="text-gray-500 mr-2" size={30} /> Linux
        </li>
        <li className="flex items-center">
          <SiExpress className="text-gray-500 mr-2" size={30} /> Express.js
        </li>
      </ul>
    </div>
  );
};

export default Resume;
