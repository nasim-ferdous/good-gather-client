import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="relative flex items-center justify-center">
        {/* Outer pulse ring */}
        <div className="absolute animate-ping h-16 w-16 rounded-full bg-emerald-500/20"></div>
        
        {/* Main Spinner */}
        <span className="loading loading-spinner loading-lg text-emerald-600 relative z-10"></span>
      </div>
      
      {/* Optional Brand Tagline */}
      <p className="mt-6 text-sm font-medium text-slate-500 dark:text-slate-400 animate-pulse tracking-wide">
        Gathering the <span className="text-emerald-600">good</span>...
      </p>
    </div>
  );
};

export default Loading;