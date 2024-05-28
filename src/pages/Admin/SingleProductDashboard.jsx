import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const SingleProductDashboard = ({ product, setEditModal }) => {
  const { id } = product;

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
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
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
      <div className="card w-[350px] bg-base-100 shadow-xl my-2 sm:my-4">
        <div className="min-h-80 ">
          <img className=" h-80 mx-auto" src={product.image} alt="Shoes" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>

          <div className="card-actions justify-end">
            <div className="badge badge-outline">{product.category}</div>
          </div>
        </div>
        <div className="p-8 flex justify-between items-center">
          
          <label
            htmlFor="my_modal_5"
              onClick={() => setEditModal(product)}
              className="btn btn-accent text-base text-white "
            >
              Edit 1
            </label>
          <Link to={`/dash/edit-product/${id}`}>
            <button
            className="btn bg-purple-500 text-base text-white ">
            Edit 2
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
