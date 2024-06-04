/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SingleProduct from "./SingleProduct";

const Products = ({ products }) => {
  return (
    <>
      <h2 className="my-6 text-4xl font-bold uppercase underline text-center">
        Our Products
      </h2>
      <div className="my-6 container mx-auto flex flex-wrap gap-4 justify-between">
        {
          products?.map(product => <SingleProduct key={product._id} product={product} />)
        }
      </div>
    </>
  );
};

export default Products;
