/* eslint-disable react/prop-types */
import SingleProduct from "./SingleProduct";

const HomeProducts = ({products}) => {
  return (
    <>
      <h2 className="my-6 text-4xl font-bold uppercase underline text-center">
        Our Products
      </h2>
      <div className="my-6 container mx-auto flex flex-wrap gap-4 justify-between">
        {
          products?.reverse().slice(0,4).map(product => <SingleProduct key={product.id} product={product} />)
        }
      </div>
    </>
  );
};

export default HomeProducts;