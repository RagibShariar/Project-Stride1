import { useLoaderData } from "react-router-dom";

const CountryDetails = () => {
  const country = useLoaderData();
  console.log(country[0]);
  return (
    <div className="shadow-xl rounded-xl bg-gray-200 w-2/5 mx-auto my-20 p-10">
      <div className="flex justify-center mb-6">
        <img
          className=""
          src={country[0].flags.svg}
          alt=""
        />
      </div>
      <h1 className="text-6xl font-bold">{country[0].name.common}</h1>
      <h2 className="text-3xl  my-4">Official Name: <span className="font-semibold">{country[0].name.official}</span></h2>
      <p className="text-2xl ">Capital: {country[0].capital}</p>
      <p className="text-2xl ">fifa: {country[0].fifa}</p>
    </div>
  );
};

export default CountryDetails;
