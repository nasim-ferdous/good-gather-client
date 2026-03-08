import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import Swal from "sweetalert2";

const NewsLetter = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
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
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center p-12 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl shadow-2xl shadow-slate-200/50 dark:shadow-none"
      >
        <div className="w-20 h-20 mx-auto rounded-3xl bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center mb-8 border border-teal-100 dark:border-teal-900/50">
          <FaEnvelopeOpenText className="text-teal-600 text-4xl" />
        </div>

        <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
          Stay Connected
        </h2>
        <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-md mx-auto">
          Join our mission. Receive hand-picked updates about upcoming volunteer
          opportunities and community impact stories.
        </p>

        <form
          className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xl mx-auto"
          onSubmit={handleSubscribe}
        >
          <input
            type="email"
            required
            placeholder="your.email@example.com"
            className="w-full px-6 py-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-hidden focus:ring-2 focus:ring-teal-500 transition-all"
          />
          <button
            type="submit"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-2xl font-bold  dark:hover:bg-slate-200 transition-all active:scale-95 whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </form>

        <p className="text-xs text-slate-400 dark:text-slate-600 mt-6">
          No spam, ever. Just community good.
        </p>
      </motion.div>
    </section>
  );
};

export default NewsLetter;
