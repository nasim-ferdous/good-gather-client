import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Footer = () => {
  const handleButton = () => {
    Swal.fire({
      icon: "success",
      title: "Subscribed!",
      text: "You're now on the list for community updates.",
      showConfirmButton: false,
      timer: 2000,
      background: "#fff",
      color: "#0f172a",
    });
  };
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding */}
        <div className="space-y-4">
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
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-xs">
            Building stronger communities through shared social impact.
            Together, we make every event count.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">
            Quick Links
          </h3>
          <ul className="space-y-3 text-slate-600 dark:text-slate-400">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/up-coming-event"}>Up Coming Events</Link>
            </li>
            <li>
              <Link to={"/about-us"}>About Us</Link>
            </li>
            <li>
              <Link to={"/create-event"}>Create Event</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-6">
            Stay Connected
          </h3>
          <div className="flex bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-transparent outline-none text-slate-900 dark:text-white"
            />
            <button
              onClick={handleButton}
              className="  bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointe px-5 transition-colors"
            >
              <FaEnvelope />
            </button>
          </div>

          <div className="flex space-x-5 mt-8">
            {[FaFacebookF, FaInstagram, FaSquareXTwitter, FaLinkedinIn].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-400 hover:text-emerald-600 text-xl transition-colors"
                >
                  <Icon />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} GoodGather — Crafted with Love for
        community good.
      </div>
    </footer>
  );
};

export default Footer;
