import React from "react";
import { motion } from "framer-motion";
import { FaComment, FaThumbsUp, FaPlusCircle, FaHashtag } from "react-icons/fa";
import Swal from "sweetalert2";

const posts = [
  {
    id: 1,
    user: "Sarah J.",
    content: "Just finished the road cleanup! Such a great turnout today.",
    likes: 24,
  },
  {
    id: 2,
    user: "Mark T.",
    content:
      "Looking for volunteers for our tree planting event next Saturday!",
    likes: 12,
  },
];
const Community = () => {
  const handleButton = () => {
    Swal.fire({
      icon: "success",
      title: "Disclaimer",
      text: "We will discus about it after implementing SOCKET.IO",
      showConfirmButton: false,
      timer: 2000,
      background: "#fff",
      color: "#0f172a",
    });
  };
  return (
    <section className="py-20 px-6 rounded-2xl bg-slate-50 dark:bg-[#0f172a] min-h-screen">
      <title>Community</title>
      <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        {/* Main Feed */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">
            Community Feed
          </h2>
          {posts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm"
            >
              <h4 className="font-bold text-teal-600 mb-2">{post.user}</h4>
              <p className="text-slate-700 dark:text-slate-300 mb-4">
                {post.content}
              </p>
              <div className="flex gap-4 text-slate-500">
                <button className="flex items-center gap-2 hover:text-teal-600 transition">
                  <FaThumbsUp /> {post.likes}
                </button>
                <button className="flex items-center gap-2 hover:text-teal-600 transition">
                  <FaComment /> Reply
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              Trending Causes
            </h3>
            <div className="space-y-3">
              {["#ClimateAction", "#CleanStreets", "#EducationForAll"].map(
                (tag) => (
                  <div
                    key={tag}
                    className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-600 cursor-pointer"
                  >
                    <FaHashtag /> {tag}
                  </div>
                ),
              )}
            </div>
          </div>

          <button
            onClick={handleButton}
            className="w-full py-4 rounded-2xl font-bold flex items-center justify-center text-white bg-slate-900 hover:bg-slate-900/50 hover:cursor-pointer  dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 gap-2 transition-all"
          >
            <FaPlusCircle /> Start Discussion
          </button>
        </aside>
      </div>
    </section>
  );
};

export default Community;
