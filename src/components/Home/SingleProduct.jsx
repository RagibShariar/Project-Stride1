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
                src={
                  product?.imageUrl
                    ? product?.imageUrl
                    : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                }
                alt="Product 1"
                className="h-full w-full object-cover object-top hover:scale-110 transition-all overflow-hidden"
              />
            </div>
          </Link>

          <div>
            <Link to={`/products/${product._id}`}>
              <p className="truncate font-sans text-xl font-semibold text-gray-900">
                {product?.title}
              </p>
            </Link>
            <p className="text-gray-600 text-sm mt-2 truncate ">
              {product?.description}
            </p>
            <div className=" mt-5 flex items-center justify-between ">
              <p>
                <span className="inline-flex items-center rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                  {product?.brand ? product?.brand : "others"}
                </span>
              </p>
              <p className="text-lg font-bold  text-red-600">
                ${product?.price}{" "}
                <span className="ml-1 text-sm line-through font-medium  text-gray-500">
                  ${product?.price}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
