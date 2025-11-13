import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="card bg-white dark:bg-emerald-100 rounded-2xl shadow-md overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300 flex flex-col h-[480px]">
      
      <img
        src={event.thumbnail}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

     
      <div className="p-5 flex flex-col justify-between grow">
        <div className="space-y-3 grow">
          {/* Title */}
          <h3 className="text-xl font-semibold text-emerald-800 min-h-14 leading-snug">
            {event.title}
          </h3>

         
          <div className="flex items-center text-gray-500 text-sm">
            <FaMapMarkerAlt className="mr-2 text-emerald-600" />
            {event.location}
          </div>

       
          <div className="flex items-center text-gray-500 text-sm">
            <FaCalendarAlt className="mr-2 text-emerald-600" />
            {new Date(event.eventDate).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>

          
          <div className="flex items-center text-gray-500 text-sm">
            <span className="text-emerald-600 font-medium mr-1">
              Created by:
            </span>
            <span className="truncate">{event.createdBy}</span>
          </div>
        </div>

      
        <div className="flex justify-between items-center pt-4 mt-auto">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full">
            <IoLeaf className="mr-1" /> {event.eventType}
          </span>

          <Link
            to={`/event-detail/${event.eventId || event._id}`}
            className="btn bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white btn-sm border-0"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
