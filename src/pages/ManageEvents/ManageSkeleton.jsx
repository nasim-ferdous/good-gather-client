import React from "react";

const ManageSkeleton = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 animate-pulse">
      {/* Smaller image area */}
      <div className="w-full h-32 bg-slate-200 dark:bg-slate-700 rounded-lg mb-3" />
      {/* Tight title and content */}
      <div className="h-5 bg-slate-200 dark:bg-slate-700 rounded w-3/4 mb-3" />
      <div className="space-y-2 mb-4">
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-1/2" />
      </div>
      <div className="flex gap-2">
        <div className="h-8 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
        <div className="h-8 w-full bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>
    </div>
  );
};

export default ManageSkeleton;
