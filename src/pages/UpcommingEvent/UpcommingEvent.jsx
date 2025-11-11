import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";
import EventCard from "../../components/EventCard/EventCard";

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
        // console.log(upcoming);

        setEvents(upcoming);
      });
  }, []);
  return (
    <div className="bg-emerald-50 min-h-screen py-16 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-10">
        Upcoming Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">No upcoming events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default UpcomingEvent;
