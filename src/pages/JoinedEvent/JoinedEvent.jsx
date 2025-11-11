import React, { useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";

const JoinedEvent = () => {
  const [joined, setJoined] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/joined")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.result);
        setJoined(result.result);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {joined.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default JoinedEvent;
