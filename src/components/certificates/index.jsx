import certificatesData from "../../jsons/certificate.json";
import { Link } from "react-router-dom";
function Certificates() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mx-4">
        {certificatesData.certificates.map((item) => (
          <div
            key={item.id}
            className="card bg-base-100 w-full xl:w-full shadow-xl"
          >
            <figure>
              <img src={item.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <Link to={item.link}>
                  <button className="btn btn-primary">ir</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Certificates;
