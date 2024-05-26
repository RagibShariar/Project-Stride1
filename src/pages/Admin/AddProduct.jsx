import Swal from "sweetalert2";

const AddProduct = () => {
  const id = String(Date.now());

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image_url.value;

    const data = { id, title, description, price, image };
    // console.log(data)

    // traditional method
    await fetch("http://localhost:3000/products", {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // success modal alert
        Swal.fire({
          title: "Product Added Successfully",
          icon: "success"
        });
        form.reset();
      });
  };

  return (
    <>
      <div>AddProduct</div>

      <div className="shrink-0 w-full md:w-[800px] shadow-2xl rounded-xl bg-base-100">
        <form onSubmit={handleAddProduct} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product ID</span>
            </label>
            <input
              type="text"
              name="id"
              value={id}
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
    </>
  );
};

export default AddProduct;
