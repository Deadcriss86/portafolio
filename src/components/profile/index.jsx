import { useEffect, useState } from "react";
import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Profile() {
  const [isChecked, setIsChecked] = useState(false);
  const [isXLScreen, setIsXLScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setIsChecked(true);
        setIsXLScreen(true);
      } else {
        setIsChecked(false);
      }
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
      <div className="collapse xl:w-2/6 ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          readOnly={isXLScreen}
        />
        <div className="collapse-title bg-gray-800 text-white cursor-pointer p-4 flex flex-row xl:flex-col xl:items-center xl:space-y-2 ">
          <img
            className="h-40 w-40  rounded-full sm:h-60 sm:w-60 xl:h-80 xl:w-80 "
            src="https://media.licdn.com/dms/image/v2/D4E03AQEQ1WxkK1qRFA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1713940732786?e=1732147200&v=beta&t=Jn8kSnXxUBvvGkNBJ2jrF_B_dSj2dMaMeGTwv3Huoes"
            alt="Profile"
          />
          <div className=" pt-4 space-y-2 px-4 flex flex-col justify-center sm:ml-24 xl:ml-2 xl:p-0 ">
            <h2 className="text-lg font-bold sm:text-4xl text-center">
              David Marroquin
            </h2>
            <p className="text-gray-600 text-sm text-center sm:text-2xl">
              Web Developer
            </p>
          </div>
        </div>

        {/* Contenido que se colapsa */}
        <div className="collapse-content shadow-2xl flex items-center p-4 bg-gray-800 text-lg sm:text-3xl xl:h-screen xl:items-start">
          <ul className="list-none p-0">
            <li className="flex items-center space-x-2">
              <FiPhone className="w-5 h-5" />
              <span>: 9613423856</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="w-5 h-5" />
              <span>: nightvariedades@gmail.com</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaGithub className="w-5 h-5" />
              <span>: DeadCriss86</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaLinkedin className="w-5 h-5" />
              <span>: David Marroquin Tamayo</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Profile;
