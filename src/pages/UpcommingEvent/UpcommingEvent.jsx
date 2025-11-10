import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => {
        const date = new Date();
        const upcoming = data.filter(
          (event) => new Date(event.eventDate) > date
        );
        console.log(upcoming);

        setEvents(upcoming);
      });
  }, []);
  return (
    <div className="card bg-emerald-50 min-h-screen py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-10">
        Upcoming Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:scale-105 hover:shadow-lg transition"
            >
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
                <div className="flex items-center text-gray-500 text-sm ">
                  {" "}
                  <span className="text-emerald-600">created by:</span>{" "}
                  {event.createdBy}
                </div>

                <div className="flex justify-between items-center pt-3">
                  <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-emerald-100 text-emerald-700 rounded-full">
                    <IoLeaf className="mr-1" /> {event.eventType}
                  </span>

                  <Link
                    // to={`/event/${event._id}`}
                    className="btn bg-emerald-500 hover:bg-emerald-600 text-white btn-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvent;
