import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../components/Providers/AuthProvider";

const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut();
  };
  return (
    <>
      <div className="drawer lg:drawer-open md:max-w-7xl mx-auto">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center ml-8">
          {/* Page content here */}
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content  ">
            <div className="text-center  mt-28 mb-12 p-2">
              <div className="w-24 h-24 rounded-full mx-auto  p-1 bg-gradient-to-r from-cyan-500 to-blue-500">
                <img
                  className="w-full h-full rounded-full"
                  src={user?.photoURL}
                  alt=""
                />
              </div>
              <h1 className="mt-3 font-bold text-xl">{user?.displayName}</h1>
              <p className="text-md font-semibold">{user?.email}</p>
            </div>
            {/* Sidebar content here */}
            <div className="gap-2 flex flex-col mb-12">
              <li className="text-lg font-bold ">
                <NavLink className="text-md font-semibold p-4 border-l-4 border-transparent hover:border-l-4 hover:border-slate-700" to={"/"}>Home</NavLink>
              </li>
              <li className="text-lg font-bold ">
                <NavLink className="text-md font-semibold p-4 border-l-4 border-transparent hover:border-l-4 hover:border-slate-700" to="all-users">All Users</NavLink>
              </li>
              <li className="text-lg font-bold ">
                <NavLink className="text-md font-semibold p-4 border-l-4 border-transparent hover:border-l-4 hover:border-slate-700" to="all-products">All Products</NavLink>
              </li>
              <li className="text-lg font-bold ">
                <NavLink className="text-md font-semibold p-4 border-l-4 border-transparent hover:border-l-4 hover:border-slate-700" to="add-products">Add Products</NavLink>
              </li>
            </div>
            <div className="">
              <button
                onClick={handleLogOut}
                className="btn btn-error text-white w-full"
              >
                logout
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
