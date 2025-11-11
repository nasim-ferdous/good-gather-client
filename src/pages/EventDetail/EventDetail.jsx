import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { data, useParams } from "react-router";
import { toast } from "react-toastify";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setEvent(data.result);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto py-16 px-6 bg-emerald-100 min-h-screen rounded-2xl shadow-sm">
      <img
        src={event.thumbnail}
        alt={event.title}
        className="w-full h-80 object-cover rounded-xl mb-8"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">
        {event.title}
      </h1>

      <div className="flex flex-wrap gap-6 text-gray-700 mb-6">
        <div className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-emerald-600" />
          {event.location}
        </div>
        <div className="flex items-center">
          <FaCalendarAlt className="mr-2 text-emerald-600" />
          {new Date(event.eventDate).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </div>
        <div className="flex items-center">
          <IoLeaf className="mr-2 text-emerald-600" />
          {event.eventType}
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-8">
        {event.description || "No detailed description provided."}
      </p>

      <div className="flex justify-between items-center">
        <span className="text-emerald-700 font-medium">
          Created by: {event.createdBy}
        </span>

        <button
          //   onClick={handleJoinEvent}
          className="btn bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
