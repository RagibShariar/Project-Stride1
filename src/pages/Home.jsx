import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Home/Hero";
import HomeProducts from "../components/Home/HomeProducts";
import Newsletter from "../components/Home/Newsletter";
import Features from "../components/Home/Features";
import Faq from "../components/Home/Faq";
import Blogs from "../components/Home/Blogs";
import BrandSlider from "../components/Home/BrandSlider";

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
    navigate("/shop");
  };

  return (
    <>
      <Hero />
      <BrandSlider/>
      <HomeProducts products={products} />


      <div className="text-center my-10">
        <button onClick={handleSeeMore} className="btn btn-lg w-48 btn-outline">
          See More
        </button>
      </div>
      <Features />
      <Blogs/>
      <Faq/>
      <Newsletter/>
    </>
  );
};

export default Home;
