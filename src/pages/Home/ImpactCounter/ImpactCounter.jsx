import React, { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Helper component for the counting animation
const Counter = ({ from, to, label }) => {
  const count = useMotionValue(from);
  // We keep this, but we will use it inside the motion component
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, to, { duration: 3 });
    return () => controls.stop();
  }, [count, to]);

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-4xl lg:text-6xl font-black text-white mb-2">
        {/* We use motion.span to render the MotionValue directly */}
        <motion.span>{rounded}</motion.span>
        <span className="text-teal-400">+</span>
      </h3>
      <p className="text-teal-100 font-medium tracking-wide uppercase text-sm">
        {label}
      </p>
    </div>
  );
};

const ImpactCounter = () => {
  return (
    <section className="py-24 bg-slate-900 dark:bg-slate-950 rounded-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <Counter from={0} to={10000} label="Volunteers" />
          <Counter from={0} to={550} label="Events Hosted" />
          <Counter from={0} to={50000} label="Trees Planted" />
          <Counter from={0} to={25} label="Cities Active" />
        </div>
      </div>
    </section>
  );
};

export default ImpactCounter;
