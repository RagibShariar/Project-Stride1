import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Hero from "../components/Home/Hero";
import HomeProducts from "../components/Home/HomeProducts";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSeeMore = () => {
      window.scrollTo(0, 0); // scroll to top of page
      navigate("/shop")
  }

  return (
    <>
      <Hero />
      <HomeProducts products={products} />

      <div className="text-center mb-10">
        <button onClick={handleSeeMore} className="btn btn-lg w-48 btn-warning">
          See More
        </button>
      </div>
    </>
  );
};

export default Home;

