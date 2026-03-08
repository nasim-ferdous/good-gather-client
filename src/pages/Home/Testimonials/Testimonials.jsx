import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Hasib Ferdous",
    role: "Volunteer",
    quote:
      "GoodGather made it incredibly easy to find local projects. I've met so many amazing people through this platform!",
  },
  {
    name: "Anni Kumari",
    role: "Event Organizer",
    quote:
      "Managing my community cleanup was a breeze. The tools provided for coordination are simply top-tier.",
  },
  {
    name: "Dr. Limon",
    role: "Healthcare Professional",
    quote:
      "The Health Camp event was perfectly organized. I am proud to be part of such a proactive community.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-4">
            Voices of <span className="text-teal-600">Impact</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            See what our community members are saying.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 rounded-[2rem] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none"
            >
              <FaQuoteLeft className="text-teal-500 text-2xl mb-6" />
              <p className="text-slate-700 dark:text-slate-300 mb-8 italic">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center font-bold text-teal-600">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
