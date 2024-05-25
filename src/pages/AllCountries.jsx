import { useLoaderData } from "react-router-dom";
import SingleCountry from "../components/SingleCountry/SingleCountry";

const AllCountries = () => {
  const countries = useLoaderData();
  return (
    <div className="container mx-auto ">
      <h1 className="text-5xl">All Countries : {countries.length}</h1>
      <div className="flex flex-wrap justify-between items-center">
        {countries?.map((country) => (
          <SingleCountry
            key={country.name.official}
            country={country}
          ></SingleCountry>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
