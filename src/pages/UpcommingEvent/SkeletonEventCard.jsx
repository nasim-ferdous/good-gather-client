import React from "react";

const SkeletonEventCard = () => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-4 animate-pulse">
      <div className="aspect-video bg-slate-200 dark:bg-slate-700 rounded-xl mb-4" />
      <div className="h-6 bg-slate-200 dark:bg-slate-700 rounded-md w-3/4 mb-4" />
      <div className="space-y-3">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
      </div>
    </div>
  );
};

export default SkeletonEventCard;
