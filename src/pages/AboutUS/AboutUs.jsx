import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaUsers, FaLeaf } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="py-12 md:24 px-6 transition-colors duration-300">
      <title>About</title>
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6"
          >
            Building a better tomorrow,{" "}
            <span className="text-teal-600">together.</span>
          </motion.h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            GoodGather was born from the belief that when local communities
            unite, no problem is too big to solve. We bridge the gap between
            passion and impact.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-24">
          {[
            {
              icon: <FaHeart />,
              title: "Compassion",
              desc: "We lead with empathy, ensuring every action supports those who need it most.",
            },
            {
              icon: <FaUsers />,
              title: "Community",
              desc: "We believe in the power of collective effort to drive systemic local change.",
            },
            {
              icon: <FaLeaf />,
              title: "Sustainability",
              desc: "We focus on initiatives that create lasting environmental and social impact.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 dark:text-white">
                {item.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center bg-slate-50 dark:bg-slate-800 p-12 rounded-[2.5rem]">
          <div>
            <h2 className="text-3xl font-bold mb-6 dark:text-white">
              Our Journey
            </h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              Started in a small local park with only 5 volunteers, GoodGather
              has grown into a nationwide movement. We realized that while
              people *want* to help, finding the right platform to coordinate
              was the biggest barrier.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Today, we provide the tools for organizers to host events and for
              volunteers to track their impact, creating a transparent cycle of
              giving.
            </p>
          </div>
          <div className="h-80 bg-slate-200 dark:bg-slate-700 rounded-3xl overflow-hidden">
            {/* Replace this with an actual image of your team or events */}
            <img
              src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
