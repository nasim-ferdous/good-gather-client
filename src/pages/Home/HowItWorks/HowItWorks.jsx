import React from "react";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaUserPlus,
  FaHeart,
  FaPlusCircle,
  FaArrowRight,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaSearch />,
      title: "Explore",
      desc: "Browse our diverse catalog of community initiatives and local events near you.",
    },
    {
      id: 2,
      icon: <FaPlusCircle />,
      title: "Host Events",
      desc: "Easily create, organize, and manage your own community events from your dashboard.",
    },
    {
      id: 3,
      icon: <FaUserPlus />,
      title: "Register",
      desc: "One-click registration to secure your spot and join a group of changemakers.",
    },
    {
      id: 4,
      icon: <FaHeart />,
      title: "Make Impact",
      desc: "Participate in the event, track your hours, and celebrate your community contribution.",
    },
  ];

  return (
    <section className="py-24 px-6  transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6"
          >
            How it <span className="text-teal-600">Works</span>
          </motion.h2>
        </div>

        {/* Updated Grid for 4 steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className=" group relative flex flex-col items-center text-center p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 transition-all hover:-translate-y-2"
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-teal-600 text-white  rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                0{step.id}
              </div>

              <div className="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
