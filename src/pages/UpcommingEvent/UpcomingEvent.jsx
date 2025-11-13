import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Loading from "../../components/Loading/Loading";

const UpcomingEvent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((res) => res.json())
      .then((data) => {
        const date = new Date();
        const upcoming = data.filter(
          (event) => new Date(event.eventDate) > date
        );

        setEvents(upcoming);
        setLoading(false);
      });
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const search_text = e.target.search.value;
    setLoading(true);
    fetch(`http://localhost:3000/search?search=${search_text}`)
      .then((res) => res.json())
      .then((data) => {
        const date = new Date();
        const upcoming = data.result.filter(
          (event) => new Date(event.eventDate) > date
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

    fetch(`http://localhost:3000/filter?eventType=${selectedType}`)
      .then((res) => res.json())
      .then((data) => {
        const now = new Date();
        const upcoming = data.result.filter(
          (event) => new Date(event.eventDate) > now
        );
        setEvents(upcoming);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Filter error:", error);
        setLoading(false);
      });
  };

  if (!events) {
    return <Loading></Loading>;
  }

  return (
    <div className="bg-emerald-50 dark:bg-zinc-800 min-h-screen py-10 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-10">
        Upcoming Events
      </h2>
      <div className=" flex flex-col md:flex-row items-center justify-between mb-10 gap-x-20 gap-y-5">
        <form
          onSubmit={handleSearch}
          className="flex grow items-center gap-2 w-full md:w-[unset]"
        >
          <input
            type="search"
            name="search"
            placeholder="Search event by title..."
            className="input grow bg-white border dark:placeholder-zinc-500 border-emerald-200 rounded-full px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
          />
          <button
            type="submit"
            className="btn bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full px-6 shadow-md transition-all"
          >
            {loading ? "Searching...." : "Search"}
          </button>
        </form>
        <form
          onSubmit={handleFilter}
          className="flex grow items-center gap-2 w-full md:w-[unset]"
        >
          <select
            type="submit"
            name="type"
            className="select grow bg-white border border-emerald-200 dark:text-zinc-500 rounded-full px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
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
            className="btn bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white rounded-full px-6 shadow-md transition-all"
          >
            {loading ? "Searching...." : "Search"}
          </button>
        </form>
      </div>

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
