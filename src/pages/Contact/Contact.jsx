import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      icon: "success",
      title: "Message Received",
      text: "Your message has been sent to our team. We'll get back to you shortly!",
      showConfirmButton: false,
      timer: 2000,
      background: "#fff",
      color: "#0f172a",
    });
  };
  return (
    <section className="py-24 px-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] transition-colors duration-300">
      <title>Contact</title>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-50 dark:bg-slate-800 p-10 rounded-3xl"
          >
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
              Send a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
              <textarea
                rows="4"
                placeholder="How can we help?"
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
              <button className="w-full  bg-slate-900 hover:bg-slate-900/50 hover:cursor-pointer  dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 text-white font-bold py-4 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-8">
              Get in Touch
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg">
              Whether you're a volunteer, an organization, or just want to say
              hi, we're here to help.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email us",
                  info: "hello@goodgather.org",
                },
                {
                  icon: <FaPhone />,
                  title: "Call us",
                  info: "+880124356435",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit us",
                  info: "Dhaka, Bangladesh",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-600 rounded-full flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 dark:text-slate-400">
                      {item.info}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
