import Swal from "sweetalert2";

const AddProduct = () => {
  const token = localStorage.getItem("token");
  const handleAddProduct = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const price = form.price.value;
    // const category = form.category.value;
    const stock = form.stock.value;
    const brand = form.brand.value;
    const discount = form.discount.value;
    const description = form.description.value;
    const imageUrl = form.imageUrl.value;
    const productInfo = {
      title,
      price,
      stock,
      brand,
      discount,
      description,
      imageUrl,
    };

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(productInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Product added successfully",
            icon: "success",
          });
          form.reset();
        }
      });
  };

  return (
    <>
      <div>AddProduct</div>

      <div className=" p-6 w-full rounded-xl shadow-md mb-12 mt-12">
        <div className="mb-12 flex justify-between border-b-2 border-dashed py-4">
          <p className="text-2xl font-semibold">Add New Product</p>
        </div>
        <form onSubmit={handleAddProduct}>
          {/* 1st row */}
          <div className="mb-12 md:grid md:grid-cols-2 ">
            <div className="mr-6">
              <p className="text-lg ">Product Title</p>
              <input
                className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Product Title"
                name="title"
                type="text"
                required
              />
            </div>
            <div>
              <p className="text-lg">Price</p>
              <input
                className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Price"
                name="price"
                type="number"
                required
              />
            </div>
          </div>
          {/* 2nd row */}
          <div className="mb-12 md:grid md:grid-cols-2 ">
            <div className="mr-6">
              <p className="text-lg">Category</p>
              <select className="select select-bordered w-full mt-2 text-xl font-semibold bg-zinc-200 rounded-lg ">
                <option disabled selected>
                Select Category
                </option>
                <option>Table</option>
                <option>Chair</option>
                <option>Couch</option>
                <option>Bed</option>
                <option>Sofa</option>
              </select>
            </div>
            <div>
              <p className="text-lg">Stock</p>
              <input
                className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Stock"
                name="stock"
                type="number"
              />
            </div>
          </div>
          {/* 3rd row */}
          <div className="mb-12 md:grid md:grid-cols-2 ">
            <div className="mr-6">
              <p className="text-lg ">Brand</p>
              <input
                className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Brand"
                name="brand"
                type="text"
                required
              />
            </div>
            <div>
              <p className="text-lg">Discount Percentage</p>
              <input
                className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Discount Percentage"
                name="discount"
                type="number"
              />
            </div>
          </div>
          {/* 4th row */}
          <div className="mb-12 w-full">
            <textarea
              placeholder="Type Message"
              className="mx-auto w-full block  border border-gray-300 outline-[#007bff]  text-xl font-semibold bg-zinc-200 p-3 rounded-lg"
              rows="4"
              name="description"
              required
            ></textarea>
          </div>
          {/* 5th row */}
          <div className="mb-12 w-full">
            <p className="text-lg">Image URL</p>
            <input
              className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
              placeholder="Image URL"
              name="imageUrl"
              type="text"
            />
          </div>
          <div className="mt-10 text-end">
            <button
              type="submit"
              className="w-full btn border bg-green-600 te hover:bg-green-700 text-white"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
