import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="hero bg-linear-to-r from-green-100 via-emerald-50 to-teal-100 dark:bg-linear-to-r dark:from-zinc-800 dark:via-zinc-600 dark:to-zinc-800 text-gray-800 py-10 px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 max-w-7xl mx-auto">
        <motion.img
          src="https://plus.unsplash.com/premium_photo-1726837345485-7a0a7d543290?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnRpbmclMjB0cmVlcyUyMHRvZ2V0aGVyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500"
          alt="GoodGather community"
          className="rounded-2xl shadow-lg w-full lg:w-1/2 object-cover"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <motion.div
          className="flex flex-col justify-center space-y-4 text-center lg:text-left"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-emerald-800 dark:text-emerald-700"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Build a Better Tomorrow, Together 🌱
          </motion.h1>

          <motion.p
            className="text-gray-700 dark:text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Join hands with Our community to create meaningful impact. Organize,
            participate, and track social development events — all in one place.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-fit mx-auto lg:mx-0"
          >
            <Link
              to="/up-coming-event"
              className="btn bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 border-none"
            >
              Upcoming Events
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
