/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = ({ products }) => {
  return (
    <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
      <h2 className="my-6 text-4xl font-bold uppercase underline text-center">
        Our Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
        {
          products?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
    </div>
  );
};

export default Products;
