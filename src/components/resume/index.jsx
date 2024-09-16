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
      <h2 className="text-3xl font-bold mb-6">Education</h2>
      <div className="space-y-8">
        {/* Universidad Valle del Grijalva */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaUniversity className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">
                Universidad Valle del Grijalva
              </h3>
              <span className="text-yellow-500">2019 — 2022</span>
              <p className="text-gray-300 mt-2">
                Nemo enim ipsam voluptatem, blanditiis praesentium voluptatum
                delenit atque corrupti, quos dolores et quas molestias exceptur.
              </p>
            </div>
          </div>
        </div>

        {/* Kodemia.mx */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaUniversity className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Kodemia.mx</h3>
              <span className="text-yellow-500">2023 — 2024</span>
              <p className="text-gray-300 mt-2">
                Ratione voluptatem sequi nesciunt, facere quisquams facere menda
                ossimus, omnis voluptas assumenda est omnis.
              </p>
            </div>
          </div>
        </div>

        {/* Harmon Hall */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaUniversity className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Harmon Hall</h3>
              <span className="text-yellow-500">2023 — 2024</span>
              <p className="text-gray-300 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Trabajos */}
      <h2 className="text-3xl font-bold mb-6 mt-12">Jobs</h2>
      <div className="space-y-8">
        {/* Ingenio Azucarero de Huixtla */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">
                Ingenio Azucarero de Huixtla
              </h3>
              <span className="text-yellow-500">2018 — 2019</span>
              <p className="text-gray-300 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </div>
          </div>
        </div>

        {/* Protección Civil Huixtla */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">
                Protección Civil Huixtla
              </h3>
              <span className="text-yellow-500">2019 — 2020</span>
              <p className="text-gray-300 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </div>
          </div>
        </div>

        {/* Protección Civil Tuxtla */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Protección Civil Tuxtla</h3>
              <span className="text-yellow-500">2022 — 2023</span>
              <p className="text-gray-300 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </div>
          </div>
        </div>

        {/* Nexodesk */}
        <div className="relative">
          <div className="absolute left-0 top-2.5 w-1 h-full bg-gray-500"></div>
          <div className="ml-8 flex items-start">
            <FaBriefcase className="text-yellow-500 mr-3 mt-1" size={24} />
            <div>
              <h3 className="text-xl font-semibold">Nexodesk</h3>
              <span className="text-yellow-500">2023 — 2024</span>
              <p className="text-gray-300 mt-2">
                Duis aute irure dolor in reprehenderit in voluptate, quila
                voluptas mag odit aut fugit, sed consequuntur magni dolores eos.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de Habilidades */}
      <h2 className="text-3xl font-bold mb-6 mt-12">Skills</h2>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-gray-300">
        <li className="flex items-center">
          <FaHtml5 className="text-red-500 mr-2" /> HTML
        </li>
        <li className="flex items-center">
          <FaCss3Alt className="text-blue-500 mr-2" /> CSS
        </li>
        <li className="flex items-center">
          <FaJsSquare className="text-yellow-500 mr-2" /> JavaScript
        </li>
        <li className="flex items-center">
          <FaGitAlt className="text-orange-500 mr-2" /> Git - GitHub
        </li>
        <li className="flex items-center">
          <FaBootstrap className="text-purple-500 mr-2" /> Bootstrap
        </li>
        <li className="flex items-center">
          <SiTailwindcss className="text-teal-500 mr-2" /> TailwindCSS
        </li>
        <li className="flex items-center">
          <FaReact className="text-cyan-500 mr-2" /> React
        </li>
        <li className="flex items-center">
          <FaNodeJs className="text-green-500 mr-2" /> Node.js
        </li>
        <li className="flex items-center">
          <SiMysql className="text-blue-500 mr-2" /> MySQL
        </li>
        <li className="flex items-center">
          <SiMongodb className="text-green-500 mr-2" /> MongoDB
        </li>
        <li className="flex items-center">
          <FaSass className="text-pink-500 mr-2" /> Sass
        </li>
        <li className="flex items-center">
          <FaLinux className="text-gray-500 mr-2" /> Linux
        </li>
        <li className="flex items-center">
          <SiExpress className="text-gray-500 mr-2" /> Express.js
        </li>
        <li className="flex items-center">
          <FaNetworkWired className="text-teal-500 mr-2" /> REST API
        </li>
      </ul>
    </div>
  );
};

export default Resume;
