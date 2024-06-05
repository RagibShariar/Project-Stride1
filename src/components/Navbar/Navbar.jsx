import { useContext } from "react";
import Headroom from "react-headroom";
import { Link, NavLink } from "react-router-dom";
import logo2 from "../../assets/logo2.png";
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };

  const menuItems = (
    <>
      <li className="font-bold ">
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/about"}>About Us</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/shop"}>Shop</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </li>
      <li className="font-bold ">
        <NavLink to={"/all-countries"}>All Countries</NavLink>
      </li>

      {user?.email && (
        <li className="font-bold ">
          <NavLink to={"dash"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );

  return (
    <>
      <Headroom>
        <div className="navbar z-50 bg-transparent backdrop-blur-2xl shadow-lg md:px-48">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {menuItems}
              </ul>
            </div>
            <Link
              to={"/"}
              className=" btn border-none shadow-none bg-transparent hover:scale-125  duration-300 ease-in-out hover:bg-transparent text-xl"
            >
              <img
                className="object-contain w-full h-full"
                src={logo2}
                alt=""
              />
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-x-2">{menuItems}</ul>
          </div>
          {/* Navbar END */}
          <div className="navbar-end">
            <ul className="menu menu-horizontal">
              {!user?.uid && (
                <li className="font-bold text-lg">
                  <Link to={"login"}>Login</Link>
                </li>
              )}
            </ul>
            {user?.uid && user?.displayName && (
              <p className="text-sm mx-4 font-semibold hidden md:block">
                Hi, {user.displayName}
              </p>
            )}
            {user?.uid && (
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    {user?.photoURL ? (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src={user.photoURL}
                      />
                    ) : (
                      <img
                        alt="Tailwind CSS Navbar component"
                        src="https://t3.ftcdn.net/jpg/06/33/54/78/360_F_633547842_AugYzexTpMJ9z1YcpTKUBoqBF0CUCk10.jpg"
                      />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60"
                >
                  <li className="my-1">
                    <Link
                      to={"dash/profile"}
                      className="justify-between text-lg font-semibold"
                    >
                      Profile
                      <span className="badge">New</span>
                    </Link>
                  </li>
                  <li className="my-1">
                    <a className="text-lg font-semibold">Settings</a>
                  </li>
                  <li className="my-1">
                    <a className="text-lg font-semibold" onClick={handleLogOut}>
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </Headroom>
    </>
  );
};

export default Navbar;
