import { useState } from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditProductPage = () => {
  const product = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log("navigate log", navigate)
  console.log("location log", location);

  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [image, setImage] = useState(product.image);

  const edited_data = { title, description, price, image };

  const handleEditProduct = (e) => {
    e.preventDefault();
    // console.log("new data after edit", edited_data);

    fetch(`http://localhost:3000/products/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(edited_data),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Edited Successfully",
          icon: "success",
        });
        navigate(-1);
      });
  };

  return (
    <>
      <div>EditProductPage</div>
      <div className="shrink-0 w-full md:w-[800px] shadow-2xl rounded-xl bg-base-100">
        <form onSubmit={handleEditProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product ID</span>
            </label>
            <input
              type="text"
              name="id"
              value={product.id}
              readOnly
              placeholder="ID"
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="input input-bordered"
            />
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="textarea textarea-bordered"
            ></textarea>
          </div>

          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            className="input input-bordered"
          />
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
            className="input input-bordered"
          />
          <div className="form-control mt-6">
            <button className="btn btn-primary">Add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProductPage;
