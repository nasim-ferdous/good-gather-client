import React from "react";
import { motion } from "framer-motion";
import {
  FaCalendarCheck,
  FaHandshakeAngle,
  FaLeaf,
  FaPeopleGroup,
} from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      icon: <FaCalendarCheck className="text-teal-600" size={28} />,
      title: "Create & Join Events",
      description:
        "Host or participate in meaningful local events that uplift communities.",
    },
    {
      icon: <FaPeopleGroup className="text-teal-600" size={28} />,
      title: "Connect with People",
      description: "Meet like-minded individuals passionate about social good.",
    },
    {
      icon: <FaLeaf className="text-teal-600" size={28} />,
      title: "Sustainable Impact",
      description:
        "Focus on long-term community growth through consistent efforts.",
    },
    {
      icon: <FaHandshakeAngle className="text-teal-600" size={28} />,
      title: "Volunteer Recognition",
      description:
        "Your deeds matter — track your participation and contributions.",
    },
  ];

  return (
    <section className="py-20 px-6  rounded-2xl  transition-colors duration-300">
      <div className="max-w-7xl mx-auto ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Why Choose <span className="text-teal-600">GoodGather?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Built for changemakers, we provide the tools you need to turn
            passion into community progress.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
