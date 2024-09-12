import Profile from "../../components/profile";
import About from "../../components/about";
function Home() {
  return (
    <>
      <div className="flex flex-col xl:flex-row">
        <Profile />
        <About />
      </div>
    </>
  );
}
export default Home;
