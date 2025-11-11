import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 hover:shadow-lg transition-transform duration-300">
      <img
        src={event.thumbnail}
        alt={event.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-emerald-800">
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
          <span className="text-emerald-600 font-medium mr-1">Created by:</span>
          {event.createdBy}
        </div>

        <div className="flex justify-between items-center pt-3">
          <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full">
            <IoLeaf className="mr-1" /> {event.eventType}
          </span>

          <Link
            to={`/event-detail/${event._id}`}
            className="btn bg-emerald-500 hover:bg-emerald-600 text-white btn-sm border-0"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
