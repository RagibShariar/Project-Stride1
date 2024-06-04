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
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-between ">
            {/* Sidebar content here */}
            <div className="gap-2 flex flex-col">
              <li className="text-lg font-bold ">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li className="text-lg font-bold ">
                <NavLink to="all-users">All Users</NavLink>
              </li>
              <li className="text-lg font-bold ">
                <NavLink to="all-products">All Products</NavLink>
              </li>
              <li className="text-lg font-bold ">
                <NavLink to="add-products">Add Products</NavLink>
              </li>
            </div>
            <div>
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
