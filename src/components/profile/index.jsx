import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const [isXl, setIsXl] = useState(window.innerWidth >= 1280); // Asume que xl es >= 1280px

  useEffect(() => {
    const handleResize = () => {
      setIsXl(window.innerWidth >= 1280); // Actualiza según el tamaño de pantalla
    };

    window.addEventListener("resize", handleResize);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isXl) {
      setIsOpen(true); // Asegura que isOpen siempre sea true en pantallas xl
    }
  }, [isXl]);

  const toggleDropdown = () => {
    if (!isXl) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <div
        className={`bg-gray-900 border-white rounded-lg m-4 flex sm:p-2 xl:w-1/4 xl:flex-col xl:text-center relative ${
          isOpen || isXl ? "xl:h-auto" : "xl:h-[400px]"
        }`}
      >
        {/* Imagen fija */}
        <div className="flex-shrink-0">
          <img
            className="w-20 h-20 rounded-xl p-2 sm:w-40 sm:h-40 xl:w-80 xl:h-80 xl:p-8"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="David M"
          />
        </div>

        {/* Contenido */}
        <div className="text-white flex-grow">
          <h2 className="text-lg pt-2 sm:text-3xl xl:text-6xl">David M</h2>
          <div className="border-2 border-white rounded-lg p-1 my-2 sm:p-2 sm:text-xl xl:text-2xl xl:my-4 xl:mx-2">
            <p>web developer</p>
          </div>

          {/* Contenido adicional cuando isOpen es true */}
          {isOpen && (
            <div className="text-white mt-4">
              <ul>
                <li>Telefono</li>
                <li>Email</li>
                <li>Address</li>
                <li>Birthday</li>
              </ul>
            </div>
          )}
        </div>

        {/* Botón para desplegar */}
        <button
          onClick={toggleDropdown}
          className={`absolute top-0 right-0 m-4 bg-blue-500 text-white p-2 rounded-lg flex items-center ${
            isXl ? "xl:hidden" : "xl:block"
          }`}
        >
          <FiChevronDown className="w-6 h-6" />
        </button>
      </div>
    </>
  );
}
export default Profile;
