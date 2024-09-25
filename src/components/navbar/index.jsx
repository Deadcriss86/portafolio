function NavBar({ setSelectedComponent }) {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-end shadow-2xl mb-4">
        <button
          onClick={() => setSelectedComponent("about")}
          className="btn px-2 btn-ghost text-sm sm:text-xl xl:text-2xl xl:px-4 hover:text-white"
        >
          About
        </button>
        <button
          onClick={() => setSelectedComponent("resume")}
          className="btn px-2 btn-ghost text-sm sm:text-xl xl:text-2xl xl:px-4 hover:text-white"
        >
          Resumen
        </button>
        <button
          onClick={() => setSelectedComponent("portafolio")}
          className="btn px-2 btn-ghost text-sm sm:text-xl xl:text-2xl xl:px-4 hover:text-white"
        >
          Portafolio
        </button>
        <button
          onClick={() => setSelectedComponent("certificates")}
          className="btn px-2 btn-ghost text-sm sm:text-xl xl:text-2xl xl:px-4 hover:text-white"
        >
          Certificados
        </button>
      </div>
    </>
  );
}

export default NavBar;
