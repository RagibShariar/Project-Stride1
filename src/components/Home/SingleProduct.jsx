import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  // const [title, price,description,category,image] = product;
  // console.log(product)
  return (
    <>
      <div className="card w-[350px] bg-base-100 shadow-xl my-2 sm:my-4 ">
        <div className="min-h-80 ">
          <Link to={`/products/${product._id}`}>
          <img
            className=" h-80 mx-auto"
            src={product.imageUrl}
            alt="Shoes"
          />
          </Link>
        </div>
        <div className="card-body">
          <Link to={`/products/${product._id}`}>
          <h2 className="card-title">
            {product.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          </Link>
          
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.category }</div>
          </div>
        </div>
        <div className="p-2 flex justify-between items-center">
          <p className="font-semibold text-3xl"><span>{ product.price}</span> $</p>
            <button className="btn">Add to Cart</button>
          </div>
      </div>
    </>
  );
};

export default SingleProduct;
