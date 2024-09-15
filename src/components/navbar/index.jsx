function NavBar({ setSelectedComponent }) {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-end shadow-2xl mb-4">
        <button
          onClick={() => setSelectedComponent("about")}
          className="btn btn-ghost text-xl hover:text-white"
        >
          About
        </button>
        <button
          onClick={() => setSelectedComponent("resume")}
          className="btn btn-ghost text-xl hover:text-white"
        >
          Resume
        </button>
        <button
          onClick={() => setSelectedComponent("portafolio")}
          className="btn btn-ghost text-xl hover:text-white"
        >
          Portafolio
        </button>
        <button
          onClick={() => setSelectedComponent("certificates")}
          className="btn btn-ghost text-xl hover:text-white"
        >
          certificates
        </button>
      </div>
    </>
  );
}

export default NavBar;
