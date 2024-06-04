import { useEffect, useState } from "react";
import EditProductModal from "./EditProductModal";
import SingleProductDashboard from "./SingleProductDashboard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [editModal, setEditModal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="my-20">
      <h1 className="mb-12 text-3xl font-bold text-center">EDIT PRODUCTS</h1>
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
