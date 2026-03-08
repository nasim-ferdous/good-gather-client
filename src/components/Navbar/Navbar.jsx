import React, { use, useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import {
  FaPlusCircle,
  FaRegCalendarCheck,
  FaTasks,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const { user, logOutUser } = use(AuthContext);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleSignOut = () => {
    logOutUser()
      .then(() => toast.success("Signout Successful"))
      .catch((error) => toast.error(error.message));
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/up-coming-event">Events</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/community">Community</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <nav
      className="navbar sticky top-0 z-50 px-2 sm:px-4 md:px-8 transition-all duration-300
      bg-white/70 dark:bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden p-2 hover:bg-teal-500/10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 sm:h-6 sm:w-6 text-slate-700 dark:text-slate-200"
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-white dark:bg-slate-900 rounded-2xl w-64 border border-slate-100 dark:border-slate-800 leading-relaxed"
          >
            {links}
          </ul>
        </div>

        {/* Mirrored Logo Section */}
        <Link
          to="/"
          className="flex items-center group transition-transform duration-300 active:scale-95"
        >
          <div className="flex items-center justify-center bg-linear-to-br from-teal-500 to-teal-700 rounded-lg sm:rounded-xl p-1 sm:p-1.5 shadow-lg shadow-teal-500/20 group-hover:shadow-teal-500/40 transition-all">
            <span className="text-white font-black text-lg sm:text-xl tracking-tighter flex">
              <span>G</span>
              <span className="inline-block scale-x-[-1]">G</span>
            </span>
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 dark:text-white ml-2 hidden xs:block">
            Good<span className="text-teal-600">Gather</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1 px-1 text-slate-600 dark:text-slate-300 font-medium">
          {links}
        </ul>
      </div>

      <div className="navbar-end gap-1 sm:gap-3">
        <button
          onClick={toggleTheme}
          aria-label="Toggle Theme"
          className="btn btn-ghost btn-circle btn-sm sm:btn-md text-slate-600 dark:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          {theme === "light" ? (
            <FaMoon className="text-lg" />
          ) : (
            <FaSun className="text-xl" />
          )}
        </button>

        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar border-2 border-teal-500/30 hover:border-teal-500 transition-all p-0"
            >
              <div className="w-8 sm:w-10 rounded-full">
                <img
                  src={
                    user?.photoURL || "https://img.icons8.com/color/48/user.png"
                  }
                  alt="User Profile"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-2xl bg-white dark:bg-slate-900 rounded-2xl w-64 border border-slate-100 dark:border-slate-800"
            >
              <div className="px-4 py-3 mb-2 border-b border-slate-100 dark:border-slate-800">
                <p className="font-bold text-slate-800 dark:text-white truncate text-sm sm:text-base">
                  {user.displayName}
                </p>
                <p className="text-xs text-slate-500 truncate">{user.email}</p>
              </div>
              <li className="py-0.5">
                <Link to="/create-event">
                  <FaPlusCircle className="text-teal-500" /> Create Event
                </Link>
              </li>
              <li className="py-0.5">
                <Link to="/manage-event">
                  <FaTasks className="text-teal-500" /> Manage Events
                </Link>
              </li>
              <li className="py-0.5">
                <Link to="/joined-event">
                  <FaRegCalendarCheck className="text-teal-500" /> Joined Events
                </Link>
              </li>
              <div className="divider my-1 opacity-50"></div>
              <li>
                <button
                  onClick={handleSignOut}
                  className="btn btn-sm w-full bg-red-50 dark:bg-red-500/10 text-red-600 hover:bg-red-600 hover:text-white border-none transition-all"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex items-center">
            {/* Login Button - Now visible on all devices */}
            <Link
              to="/login"
              className="btn btn-sm sm:btn-md bg-slate-900 hover:bg-slate-900/50 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 text-white border-none rounded-lg sm:rounded-xl px-4 sm:px-8 shadow-lg shadow-teal-500/20 transition-all active:scale-95"
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
