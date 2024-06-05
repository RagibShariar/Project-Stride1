import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Blogs from "../components/Home/Blogs";
import BrandSlider from "../components/Home/BrandSlider";
import Faq from "../components/Home/Faq";
import Features from "../components/Home/Features";
import Hero from "../components/Home/Hero";
import HomeProducts from "../components/Home/HomeProducts";
import Newsletter from "../components/Home/Newsletter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://best-furniture-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSeeMore = () => {
    window.scrollTo(0, 0); // scroll to top of page
    navigate("/shop");
  };

  return (
    <>
      <Helmet>
        <title>Best Furniture | Home</title>
      </Helmet>
      <Hero />
      <BrandSlider />
      <HomeProducts products={products} />

      <div className="text-center my-10">
        <button onClick={handleSeeMore} className="btn btn-md w-48 btn-outline">
          View All
        </button>
      </div>
      <Features />
      <Blogs />
      <Faq />
      <Newsletter />
    </>
  );
};

export default Home;
