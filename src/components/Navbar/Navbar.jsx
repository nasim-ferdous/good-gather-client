import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
// import logo from "../../";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        toast.success("Signout is Successfully Done ");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const links = (
    <>
      <li>
        <NavLink to={"/up-coming-event"}>Upcoming Events</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost text-xl">
          Good Gather
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex">
            <details className="dropdown">
              <summary className="btn bg-green-200 border-0 m-1  ">
                <img
                  className="w-10 rounded-full"
                  src={
                    user?.photoURL ||
                    "https://img.icons8.com/office/40/user.png"
                  }
                  alt="user avatar"
                />
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 space-y-3  p-2 shadow-sm">
                <li>
                  <p className="bg-green-200 font-semibold">
                    {user.displayName}
                  </p>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </details>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="btn bg-green-500 hover:bg-green-600">
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn bg-green-500 hover:bg-green-600"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
