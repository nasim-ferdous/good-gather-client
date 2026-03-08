import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300">
      {/* Thumbnail with Aspect Ratio */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 text-xs font-bold bg-white/90 dark:bg-slate-900/90 backdrop-blur text-emerald-700 rounded-full flex items-center gap-1 shadow-sm">
            <IoLeaf size={12} /> {event.eventType}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 line-clamp-2">
          {event.title}
        </h3>

        <div className="space-y-2 mb-6 text-sm text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-emerald-500" />
            <span className="truncate">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-emerald-500" />
            {new Date(event.eventDate).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <FaUser size={12} /> {event.createdBy}
          </div>
          <Link
            to={`/event-detail/${event.eventId || event._id}`}
            className="text-sm font-bold text-emerald-600 hover:text-emerald-700"
          >
            Details →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
