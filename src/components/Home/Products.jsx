/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { Helmet } from "react-helmet-async";

const Products = ({ products }) => {
  return (
    <>
      <Helmet>
        <title>Best Furniture | Shop </title>
      </Helmet>
    <div className="pt-14 pb-20 mx-auto lg:max-w-7xl sm:max-w-full">
      <div className="text-center mb-20">
            <h2 className="sm:text-4xl text-2xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
              Our Products 
            </h2>
          </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6 px-4">
        {
          products?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
      </div>
      </>
  );
};

export default Products;
