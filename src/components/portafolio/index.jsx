import portfolioData from "../../items.json";
function Portafolio() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 mx-4">
        {portfolioData.portfolio.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} className="w-full h-auto" />
            <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
export default Portafolio;
