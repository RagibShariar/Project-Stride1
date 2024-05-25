import { Link } from "react-router-dom";

const SingleCountry = ({ country }) => {
  return (
    <>
      <div className="px-3 py-6 w-72 mx-auto bg-base-100 shadow-xl rounded-xl">
        <figure>
          <img className="" src={country.flags.png} alt="Shoes" />
        </figure>
        <div className="">
          <h2 className="card-title">{country.name.common}</h2>
          <div className=" justify-end mt-10">
            <Link to={`/country/${country.name.common}`}>
              <button className="btn w-full btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCountry;
