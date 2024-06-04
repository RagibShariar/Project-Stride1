import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const SingleProductDashboard = ({ product, setEditModal }) => {
  const token = localStorage.getItem("token");
  const { _id } = product;

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
            authorization: `Bearer ${token}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <>
            <div className="h-[430px] overflow-hidden bg-white rounded-2xl p-3 cursor-pointer transition-all relative shadow-lg border hover:border-blue-600">
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



          <div className="mt-6 flex justify-between items-center">
          {/* <label
            htmlFor="my_modal_5"
              onClick={() => setEditModal(product)}
              className="btn btn-accent text-base text-white "
            >
              Edit 1
            </label> */}
          <Link to={`/dash/edit-product/${_id}`}>
            <button className="btn px-9 bg-purple-500 text-base text-white ">
              Edit
            </button>
          </Link>
          <button
            onClick={handleDelete}
            className="btn btn-error text-base text-white px-7"
          >
            Delete
          </button>
        </div>
        </div>
        
      







    </>
  );
};

export default SingleProductDashboard;
