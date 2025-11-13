import React from "react";
import { FaEnvelopeOpenText } from "react-icons/fa6";

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-emerald-100 dark:bg-zinc-800 py-10 px-6">
      <div className="max-w-4xl mx-auto text-center bg-emerald-50 dark:bg-emerald-100 p-10 rounded-3xl shadow-sm border border-emerald-100">
        <div className="flex justify-center mb-4">
          <FaEnvelopeOpenText className="text-emerald-600 text-4xl" />
        </div>
        <h2 className="text-3xl font-bold text-emerald-800 mb-3">
          Stay Connected with GoodGather
        </h2>
        <p className="text-gray-600 mb-8">
          Subscribe to our newsletter and never miss an update about upcoming
          community events and volunteer opportunities.
        </p>

        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full sm:w-2/3 px-5 py-3 rounded-full border border-gray-200 dark:border-zinc-600 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <button
            type="submit"
            className="bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-3 rounded-full font-medium  transition"
          >
            Subscribe
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy — unsubscribe anytime.
        </p>
      </div>
    </div>
  );
};

export default NewsLetter;
