import SingleProduct from "./SingleProduct";

const Products = () => {
  return (
    <>
      <h2 className="my-6 text-4xl font-bold uppercase underline text-center">
        Our Products
      </h2>
      <div className="my-6 container mx-auto grid lg:grid-cols-3 justify-items-center">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </>
  );
};

export default Products;
