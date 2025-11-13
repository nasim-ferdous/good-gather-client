import React, { use, useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../provider/AuthPRovider";

const JoinedEvent = () => {
  const [joined, setJoined] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    fetch(`https://good-gather-server.vercel.app/joined?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.result);
        setJoined(result.result);
      });
  }, [user]);

  if (!joined) {
    return <Loading></Loading>;
  }
  return (
    <div className="bg-emerald-50 dark:bg-zinc-800 min-h-screen py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
        Your Joined Events
      </h2>
      {joined.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t joined any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-10 px-6">
          {joined.map((event) => (
            <EventCard key={event._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default JoinedEvent;
