import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Loading from "../../components/Loading/Loading";
import SkeletonEventCard from "./SkeletonEventCard";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://good-gather-server.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        const date = new Date();
        const upcoming = data.filter(
          (event) => new Date(event.eventDate) > date,
        );

        setEvents(upcoming);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);
    fetch(`https://good-gather-server.vercel.app/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        const date = new Date();
        const upcoming = data.result.filter(
          (event) => new Date(event.eventDate) > date,
        );

        setEvents(upcoming);
        e.target.reset();
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFilter = (e) => {
    e.preventDefault();
    const selectedType = e.target.type.value;
    setLoading(true);

    fetch(
      `https://good-gather-server.vercel.app/filter?eventType=${selectedType}`,
    )
      .then((res) => res.json())
      .then((data) => {
        const now = new Date();
        const upcoming = data.result.filter(
          (event) => new Date(event.eventDate) > now,
        );
        setEvents(upcoming);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Filter error:", error);
        setLoading(false);
      });
  };

  return (
    // Added bg-slate-50 and dark:bg-slate-950 for better theme contrast
    <div className="min-h-screen py-16 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">
            Upcoming <span className="text-emerald-600">Events</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400">
            Join a cause and make a difference today.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="flex w-full gap-2">
            <input
              type="search"
              name="search"
              placeholder="Search event..."
              className="w-full bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-700 rounded-full px-5 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-white"
            />
            <button
              type="submit"
              // Added min-w-[100px] and flex items-center justify-center
              className="min-w-[100px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-3 font-semibold transition-all shadow-md flex items-center justify-center"
            >
              {loading ? "..." : "Search"}
            </button>
          </form>

          {/* Filter Form */}
          <form onSubmit={handleFilter} className="flex w-full gap-2">
            <select
              name="type"
              className="w-full bg-white dark:bg-slate-900 border border-emerald-200 dark:border-slate-700 rounded-full px-5 py-3 shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none dark:text-slate-300"
            >
              <option value="All">All Types</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Others">Others</option>
            </select>
            <button
              type="submit"
              // Added min-w-[100px] to match the Search button
              className="min-w-[100px] bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-6 py-3 font-semibold transition-all shadow-md flex items-center justify-center"
            >
              Filter
            </button>
          </form>
        </div>

        {/* Grid Section */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <SkeletonEventCard key={i} />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-slate-500 dark:text-slate-400 text-lg">
              No upcoming events found matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {events.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UpcomingEvent;
