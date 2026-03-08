import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { FaArrowRight, FaUsers } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="relative pt-8 pb-12 lg:pt-12 lg:pb-16">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Content */}
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
              </span>
              <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 tracking-wide uppercase">
                Active community of 10,000+
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl font-black text-slate-900 dark:text-white tracking-tighter leading-[0.9]"
            >
              Impact <br />
              <span className="text-teal-600">Together.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-lg"
            >
              From local cleanups to global movements,{" "}
              <span className="font-bold text-teal-600">GoodGather</span> is
              your digital home for social impact. Organize effortlessly,
              volunteer locally, and track your contribution
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-4"
            >
              <Link
                to="/up-coming-event"
                className="btn btn-lg bg-slate-900 hover:bg-slate-900/50 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 text-white border-none rounded-2xl px-10 text-lg shadow-2xl"
              >
                Chose Events <FaArrowRight />
              </Link>
            </motion.div>
          </div>

          {/* Visual Side */}
          <motion.div
            className="flex-1 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
              <img
                src="https://images.unsplash.com/photo-1548705085-101177834f47?q=80&w=1032"
                alt="Community"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>

              {/* Floating Stat Card */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-8 left-8 right-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl flex items-center justify-between"
              >
                <div>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">
                    Global Reach
                  </p>
                  <p className="text-2xl font-black text-slate-900 dark:text-white">
                    550+ Events Done
                  </p>
                </div>
                <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center text-white">
                  <FaUsers size={20} />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
