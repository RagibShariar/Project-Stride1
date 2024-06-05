import { useEffect, useState } from "react";
import EditProductModal from "./EditProductModal";
import SingleProductDashboard from "./SingleProductDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [editModal, setEditModal] = useState(null);

  useEffect(() => {
    fetch("https://best-furniture-server.onrender.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="my-20">
      <div className="text-center mb-20">
        <h2 className="sm:text-4xl text-2xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
          All Products
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-xl:gap-4 gap-6">
        {products.map((product) => (
          <SingleProductDashboard
            key={product._id}
            product={product}
            setEditModal={setEditModal}
          />
        ))}
      </div>
      <div>{editModal && <EditProductModal editModal={editModal} />}</div>
    </div>
  );
};

export default AllProducts;
