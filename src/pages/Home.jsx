import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Hero from "../components/Home/Hero";
import HomeProducts from "../components/Home/HomeProducts";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <Hero />
      <HomeProducts products={products} />

      <div className="text-center mb-10">
        <a href="shop" className="btn btn-lg w-48 btn-warning">
          See More
        </a>
      </div>
    </>
  );
};

export default Home;
