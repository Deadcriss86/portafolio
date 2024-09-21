import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Profile() {
  const [isChecked, setIsChecked] = useState(false);
  const [isXLScreen, setIsXLScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1440;
      setIsChecked(isLargeScreen);
      setIsXLScreen(isLargeScreen);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleCheckboxChange = () => {
    if (!isXLScreen) {
      setIsChecked(!isChecked);
    }
  };

  return (
    <>
      {/* Checkbox para controlar el colapso */}
      <div className="collapse xl:w-2/6 mx-auto">
        <input
          type="checkbox"
          className="collapse-toggle"
          checked={isChecked}
          onChange={handleCheckboxChange}
          readOnly={isXLScreen}
        />
        <div className="collapse-title bg-gray-800 text-white cursor-pointer p-4 flex flex-row xl:flex-col xl:items-center xl:space-y-4">
          {/* Imagen del perfil */}
          <img
            className="h-40 w-40 rounded-full sm:h-60 sm:w-60 xl:h-80 xl:w-80"
            src="https://media.licdn.com/dms/image/v2/D4E03AQEQ1WxkK1qRFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713940732786?e=1732147200&v=beta&t=Jn8kSnXxUBvvGkNBJ2jrF_B_dSj2dMaMeGTwv3Huoes"
            alt="Profile"
          />

          {/* Información del perfil */}
          <div className="pt-4 space-y-2 px-4 flex flex-col justify-center text-center sm:mx-14 xl:ml-2">
            <h2 className="text-lg font-bold sm:text-4xl">David Marroquin</h2>
            <p className="text-gray-400 text-sm sm:text-2xl">Web Developer</p>
          </div>

          {/* Checkbox visual con icono de flecha */}
          <label className="flex justify-end sm:justify-end items-center mt-4 xl:hidden cursor-pointer sm:pr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className={`h-8 w-8 text-white transform transition-transform duration-300 ${
                isChecked ? "rotate-180" : ""
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </label>
        </div>

        {/* Contenido colapsable */}
        <div className="collapse-content shadow-2xl p-4 bg-gray-800 text-white text-lg sm:text-3xl xl:h-screen xl:items-start">
          <ul className="list-none space-y-4">
            <li className="flex items-center space-x-2">
              <FiPhone className="w-5 h-5 text-white" />
              <a href="https://wa.me/529613423856" className="text-gray-300">
                WhatsApp: +529613423856
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="w-5 h-5 text-white" />
              <a
                href="mailto:nightvariedades@gmail.com"
                className="text-gray-300"
              >
                Correo: nightvariedades@gmail.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaGithub className="w-5 h-5 text-white" />
              <a
                href="https://github.com/DeadCriss86"
                className="text-gray-300"
              >
                GitHub: DeadCriss86
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin className="w-5 h-5 text-white" />
              <a
                href="https://www.linkedin.com/in/david-marroquin86/"
                className="text-gray-300"
              >
                LinkedIn: David Marroquin Tamayo
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Profile;
