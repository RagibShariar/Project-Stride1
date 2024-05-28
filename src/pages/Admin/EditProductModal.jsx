import { useState } from "react";

/* eslint-disable react/prop-types */
const EditProductModal = ({ editModal }) => {
  const [id, setId] = useState(editModal.id);
  const [title, setTitle] = useState(editModal.title);
  const [description, setDescription] = useState(editModal.description);
  const [price, setPrice] = useState(editModal.price);
  const [image, setImage] = useState(editModal.image);

  const handleEdit = async (e) => {
    e.preventDefault();

    // const form = e.target;
    // const title = form.title.value;
    // const description = form.description.value;
    // const price = form.price.value;
    // const image = form.image_url.value;

    // const data = { title, description, price, image };
  };

  return (
    <>
      <input type="checkbox" id="my_modal_5" className="modal-toggle " />
      <div className="modal " role="dialog">
        <div className="modal-box max-w-4xl  shadow-2xl ">
          <form onSubmit={handleEdit} className="card-body p-0 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product ID</span>
              </label>
              <input
                type="text"
                value={editModal.id}
                readOnly
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Product Name</span>
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
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
            <div className="modal-action mt-6 flex justify-end">
              <button className="btn btn-primary">Update</button>
              <label htmlFor="my_modal_5" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProductModal;
