import { useState } from "react";
import Profile from "../../components/profile";
import About from "../../components/about";
import Resume from "../../components/resume"; // Asumiendo que tienes este componente
import Portafolio from "../../components/portafolio"; // Asumiendo que tienes este componente
import NavBar from "../../components/navbar";

function Home() {
  // Estado para controlar el componente actual
  const [selectedComponent, setSelectedComponent] = useState("about");

  // Función para cambiar el componente según el link clicado
  const renderComponent = () => {
    switch (selectedComponent) {
      case "resume":
        return <Resume />;
      case "portafolio":
        return <Portafolio />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <NavBar setSelectedComponent={setSelectedComponent} />
      <div className="flex flex-col xl:flex-row">
        <Profile />
        <div className="flex xl:flex-col xl:w-3/5">{renderComponent()}</div>
      </div>
    </>
  );
}

export default Home;
