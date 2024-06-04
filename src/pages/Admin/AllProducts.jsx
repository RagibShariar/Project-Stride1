import { useEffect, useState } from "react";
import SingleProductDashboard from "./SingleProductDashboard";
import EditProductModal from "./EditProductModal";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [editModal, setEditModal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {setProducts(data)});
  }, [ ]);

  return (
    <>
      <h1 className="text-3xl font-bold">EDIT PRODUCTS</h1>
      <div className="px-6 flex flex-wrap gap-x-6">
      {products.map((product) => (
        <SingleProductDashboard
          key={product._id}
          product={product}
          setEditModal={setEditModal} 
        />
      ))}
        
      </div>
      <div>
        {editModal && <EditProductModal editModal={editModal } />}
      </div>
    </>
  );
};

export default AllProducts;
