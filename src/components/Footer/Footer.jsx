import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <div className="bg-emerald-50 dark:bg-zinc-800 text-emerald-800 border-t border-emerald-100 dark:border-zinc-500 ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="text-2xl font-bold text-emerald-700">
            Good<span className="text-emerald-500">Gather</span>
          </Link>
          <p className="mt-3 text-sm text-emerald-700 leading-relaxed">
            Building stronger communities through shared social impact.
            Together, we make every event count.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-emerald-700 mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-emerald-700">
            <li>
              <Link to="/" className="hover:text-emerald-900 transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/up-coming-event"
                className="hover:text-emerald-900 transition"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                to="/create-event"
                className="hover:text-emerald-900 transition"
              >
                Create Event
              </Link>
            </li>
            <li>
              <Link
                // to="/abopt"
                className="hover:text-emerald-900 transition"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg text-emerald-700 mb-3">
            Stay Connected
          </h3>
          <p className="text-sm mb-3 text-emerald-700">
            Subscribe to our newsletter for updates about community events and
            initiatives.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l-2xl border border-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <button className="btn bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-4 py-2 rounded-r-2xl  transition">
              <FaEnvelope />
            </button>
          </div>
          <div className="flex space-x-4 mt-5">
            <p
              href="#"
              className="text-emerald-600 hover:text-emerald-800 text-xl"
            >
              <FaFacebookF />
            </p>
            <p
              href="#"
              className="text-emerald-600 hover:text-emerald-800 text-xl"
            >
              <FaInstagram />
            </p>
            <p
              href="#"
              className="text-emerald-600 hover:text-emerald-800 text-xl"
            >
              <FaSquareXTwitter />
            </p>
            <p
              href="#"
              className="text-emerald-600 hover:text-emerald-800 text-xl"
            >
              <FaLinkedinIn />
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-emerald-100 dark:border-zinc-500 py-4 text-center text-sm text-emerald-600">
        © {new Date().getFullYear()} GoodGather — Crafted with Love for
        community good.
      </div>
    </div>
  );
};

export default Footer;
