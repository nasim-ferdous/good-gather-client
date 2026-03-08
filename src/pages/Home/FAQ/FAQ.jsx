import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

const faqData = [
  {
    question: "Is GoodGather free to use?",
    answer:
      "Yes! GoodGather is completely free for individual volunteers and non-profit community organizers.",
  },
  {
    question: "How do I host an event?",
    answer:
      "Simply navigate to your dashboard, click 'Create Event', and fill in the details. Once reviewed, it will go live for your community.",
  },
  {
    question: "Can I track my volunteer hours?",
    answer:
      "Absolutely. Your profile includes a dedicated 'Impact' tab that logs all your registered hours and participation history.",
  },
  {
    question: "Is my personal information secure?",
    answer:
      "Privacy is our priority. We use industry-standard encryption to ensure your data stays protected and never shared without consent.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <section className="py-24 px-6 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-center text-slate-900 dark:text-white mb-16">
          Frequently Asked <span className="text-teal-600">Questions</span>
        </h2>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left"
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
              >
                <span className="font-bold text-slate-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 45 : 0 }}
                >
                  <FaPlus className="text-teal-600" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
