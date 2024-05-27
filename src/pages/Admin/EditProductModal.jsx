/* eslint-disable react/prop-types */
const EditProductModal = ({ editModal }) => {
  console.log(editModal)
  
  return (
    <>
      <div>EditProduct Modal</div>

      <input type="checkbox" id="my_modal_5" className="modal-toggle " />
<div className="modal " role="dialog">
  <div className="modal-box max-w-4xl  shadow-2xl ">
    
  <form className="card-body p-0 ">
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
                    value={editModal.title}
                    placeholder="Title"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Product Description</span>
                  </label>
                  <textarea
                    name="description"
                placeholder="Description"
                value={editModal.description}
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
              value={editModal.price}
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
              value={editModal.image}
                  required
                  className="input input-bordered"
                />
                <div className="modal-action mt-6 flex justify-end">
              <button className="btn btn-primary">Update</button>
              <label htmlFor="my_modal_5" className="btn">Cancel</label>
                </div>
              </form>
          
  </div>
</div>


      
      {/* <div>
        <dialog id="my_modal_5" className=" modal modal-bottom sm:modal-middle">
          <div className="modal-box lg:min-w-[700px]">
            <div className="">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product ID</span>
                  </label>
                  <input
                    type="text"
                    value={id}
                    readOnly
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    value={product.title}
                    placeholder="Title"
                    required
                    className="input input-bordered"
                  />
                  <label className="label">
                    <span className="label-text">Product Description</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="Description"
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
                  required
                  className="input input-bordered"
                />
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Add</button>
                </div>
              </form>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </div> */}
    </>
  );
};

export default EditProductModal;
