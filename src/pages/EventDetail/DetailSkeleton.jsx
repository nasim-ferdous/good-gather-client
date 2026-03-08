import React from "react";

const DetailSkeleton = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 animate-pulse">
      <div className="w-full h-80 bg-slate-200 dark:bg-slate-700 rounded-3xl mb-8" />
      <div className="h-10 bg-slate-200 dark:bg-slate-700 rounded-lg w-3/4 mb-6" />
      <div className="flex gap-6 mb-8">
        <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded-full" />
        <div className="h-6 w-32 bg-slate-200 dark:bg-slate-700 rounded-full" />
      </div>
      <div className="space-y-3 mb-8">
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-full" />
        <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
      </div>
    </div>
  );
};

export default DetailSkeleton;
