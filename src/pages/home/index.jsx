import { useState } from "react";
import Profile from "../../components/profile";
import About from "../../components/about";
import Resume from "../../components/resume";
import Portafolio from "../../components/portafolio";
import Certificates from "../../components/certificates";
import NavBar from "../../components/navbar";

function Home() {
  const [selectedComponent, setSelectedComponent] = useState("about");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "resume":
        return <Resume />;
      case "portafolio":
        return <Portafolio />;
      case "certificates":
        return <Certificates />;
      default:
        return <About />;
    }
  };

  return (
    <>
      <NavBar setSelectedComponent={setSelectedComponent} />
      <div className="flex flex-col xl:flex-row">
        <Profile />
        <div className="flex xl:flex-col xl:w-8/12">{renderComponent()}</div>
      </div>
    </>
  );
}

export default Home;
