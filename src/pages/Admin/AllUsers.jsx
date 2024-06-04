import { Link, useLoaderData } from "react-router-dom";

const AllUsers = () => {
  const token = localStorage.getItem("token");
  const users = useLoaderData();

  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table text-lg">
          {/* head */}
          <thead>
            <tr>
              <th>_id</th>
              <th>Name</th>
              <th>email</th>
              <th>image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <>
                <tr key={user._id} className="hover">
                  <th>{user._id}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <img className="w-12 h-12" src={user.image} alt="" />
                  </td>
                  <td>
                    <Link to={`/dash/edit-user/${user._id}`}>
                      <button className="btn mx-2 btn-warning">edit</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(`${user._id}`)}
                      className="btn mx-2 btn-error"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllUsers;
