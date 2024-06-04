import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SingleProduct = ({ product }) => {
  // const [title, price,description,category,image] = product;
  // console.log(product)
  return (
    <>
      <div className="">
            <div className="h-[360px] overflow-hidden bg-white rounded-2xl p-3 cursor-pointer transition-all relative shadow-lg border hover:border-blue-600">
              <Link to={`/products/${product._id}`}>
                <div className=" w-full h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4 ">
                  <img
                src={ product?.imageUrl  ? product?.imageUrl : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"}
                    alt="Product 1"
                    className="h-full w-full object-cover object-top hover:scale-110 transition-all overflow-hidden"
                  />
                </div>
              </Link>

              <div>
                <Link className="font-sans text-xl font-semibold text-gray-900">
                 {product?.title}
                </Link>
                <p className="text-gray-600 text-sm mt-2 truncate ">
              { product?.description}
                </p>
            <div className="flex items-end flex-col justify-end ">
            <h4 className="text-lg font-bold mt-4 text-red-600">
              ${ product?.price}{" "}
                  <span className="ml-1 text-sm line-through font-medium  text-gray-500">
                    ${product?.price}
                  </span>
                </h4>
                </div>
              </div>
            </div>
      </div>


    </>
  );
};

export default SingleProduct;
