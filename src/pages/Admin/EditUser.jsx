import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditUser = () => {
  const token = localStorage.getItem('token');
  const user = useLoaderData();
  const navigate = useNavigate();

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const userInfo = { name, email, image };

    fetch(`http://localhost:5000/users/${user._id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire({
          title: "Edited Successfully",
          icon: "success",
        });
        navigate(-1);
      });

  }


  return (
    <>
      <div className=" p-6 w-full rounded-xl shadow-md mb-12 mt-12">
        <div className="mb-12 flex justify-between border-b-2 border-dashed py-4">
        
        </div>
        <form onSubmit={handleEdit}>
          {/* 1st row */}
        <div className="mb-12 md:grid md:grid-cols-2 ">
          <div className="mr-6">
            <p className="text-lg ">Name</p>
            <input
              className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Name"
                name="name"
                defaultValue={user.name}
              type="text"
            />
          </div>
          <div>
            <p className="text-lg">Email</p>
            <input
              className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
                placeholder="Email"
                name="email"
                defaultValue={user.email}
              type="email"
            />
          </div>
        </div>
        {/* 5th row */}
        <div className="mb-12 w-full">
          <p className="text-lg">Image URL</p>
          <input
            className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full outline-[#007bff]"
              placeholder="Image URL"
              name="image"
              defaultValue={user.image}
            type="text"
          />
        </div>
        <div className="mt-10 text-end">
          <button type="submit" className="w-full btn border bg-green-600 te hover:bg-green-700 text-white">
            Save Changes
          </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default EditUser;