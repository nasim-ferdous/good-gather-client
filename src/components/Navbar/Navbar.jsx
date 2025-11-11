import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import { FaPlusCircle, FaRegCalendarCheck, FaTasks } from "react-icons/fa";

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
        <NavLink
          to="/"
          className="text-emerald-700 font-medium hover:text-emerald-900"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/up-coming-event"
          className="text-emerald-700 font-medium hover:text-emerald-900"
        >
          Upcoming Events
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-emerald-50 shadow-sm sticky top-0 z-50 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-emerald-800"
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
            className="menu menu-sm dropdown-content bg-white rounded-box mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>

        <Link to="/" className="text-2xl font-bold text-emerald-700 ml-2">
          Good<span className="text-emerald-500">Gather</span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center space-x-2">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-10 rounded-full border border-emerald-400">
                  <img
                    src={
                      user?.photoURL ||
                      "https://img.icons8.com/office/40/user.png"
                    }
                    alt="User"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 p-3 shadow-md w-52 border border-emerald-100"
              >
                <li>
                  <Link
                    to="/create-event"
                    className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900"
                  >
                    <FaPlusCircle /> Create Event
                  </Link>
                </li>
                <li>
                  <Link
                    to="/manage-events"
                    className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900"
                  >
                    <FaTasks /> Manage Events
                  </Link>
                </li>
                <li>
                  <Link
                    to="/joined-event"
                    className="flex items-center gap-2 text-emerald-700 hover:text-emerald-900"
                  >
                    <FaRegCalendarCheck /> Joined Events
                  </Link>
                </li>
                <div className="divider my-1"></div>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="bg-emerald-500 text-white rounded-lg py-2 hover:bg-emerald-600 transition"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="btn bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btn bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-6"
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
