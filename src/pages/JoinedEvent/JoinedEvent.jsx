import React, { use, useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import { AuthContext } from "../../provider/AuthPRovider";
import SkeletonEventCard from "../UpcommingEvent/SkeletonEventCard";

const JoinedEvent = () => {
  const [joined, setJoined] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = use(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    fetch(`https://good-gather-server.vercel.app/joined?email=${user.email}`, {
      headers: { authorization: `Bearer ${user.accessToken}` },
    })
      .then((res) => res.json())
      .then((result) => {
        setJoined(result.result || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [user]);

  return (
    <div className="min-h-screen py-10 px-6 transition-colors duration-300">
      <title>Joined Events</title>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white text-center mb-16">
          Your <span className="text-emerald-600">Joined Events</span>
        </h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <SkeletonEventCard key={i} />
            ))}
          </div>
        ) : joined.length === 0 ? (
          <div className="text-center py-20 bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
              No events joined yet
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Explore upcoming events and start making an impact!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {joined.map((event) => (
              <EventCard key={event._id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JoinedEvent;
