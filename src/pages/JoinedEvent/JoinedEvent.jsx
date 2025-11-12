import React, { use, useEffect, useState } from "react";
import EventCard from "../../components/EventCard/EventCard";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../provider/AuthPRovider";

const JoinedEvent = () => {
  const [joined, setJoined] = useState([]);
  const { user } = use(AuthContext);
  useEffect(() => {
    fetch("http://localhost:3000/joined", {
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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto py-10 px-6">
        {joined.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default JoinedEvent;
