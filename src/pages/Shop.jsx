import { useLoaderData } from "react-router-dom";
import Products from "../components/Home/Products";

const Shop = () => {
  const products = useLoaderData();
  return (
    <>
      <div>View All Products</div>
      <Products  products={products}/>
    </>
  );
};

export default Shop;