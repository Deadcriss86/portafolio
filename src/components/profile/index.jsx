import { FiPhone } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
function Profile() {
  return (
    <>
      <div className="collapse xl:w-2/5 ">
        <input type="checkbox" />
        <div className="collapse-title bg-gray-800 text-white cursor-pointer p-4 flex flex-row ">
          <img
            className="h-40 w-40 rounded-xl sm:h-60 sm:w-60"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile"
          />
          <div className="ml-4 pt-4 space-y-2">
            <h2 className="text-5xl font-bold sm:text-6xl">David M</h2>
            <p className="text-gray-600 text-3xl sm:text-4xl">Web Developer</p>
          </div>
        </div>

        {/* Contenido que se colapsa */}
        <div className="collapse-content shadow-2xl flex items-center p-4 bg-gray-800 text-2xl sm:text-3xl xl:h-screen xl:items-start">
          <ul className="list-none p-0">
            <li className="flex items-center space-x-2">
              <FiPhone className="w-5 h-5" />
              <span>: 9613423856</span>
            </li>
            <li className="flex items-center space-x-2">
              <MdEmail className="w-5 h-5" />
              <span>: nightvariedades@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Profile;
