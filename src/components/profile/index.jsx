import { FiPhone } from "react-icons/fi";
function Profile() {
  return (
    <>
      <div className="collapse xl:w-1/2">
        <input type="checkbox" />
        <div className="collapse-title bg-gray-800 text-white cursor-pointer p-4 flex flex-row items-center">
          <img
            className="h-40 w-40 rounded-xl"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Profile"
          />
          <div className="ml-4">
            <h2 className="text-2xl font-bold sm:text-3xl">David M</h2>
            <p className="text-gray-600 text-lg sm:text-2xl">Web Developer</p>
          </div>
        </div>

        {/* Contenido que se colapsa */}
        <div className="collapse-content p-4 bg-gray-800 text-lg sm:text-2xl">
          <ul className="list-none p-0">
            <li className="flex-col items-center space-x-2">
              <span>Phone:</span>
              <span>
                <FiPhone className="w-5 h-5" /> 9613423856
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Profile;
