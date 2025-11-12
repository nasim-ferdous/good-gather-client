import React, { use, useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthPRovider";
import Loading from "../../components/Loading/Loading";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState({});
  const { user } = use(AuthContext);
  const navigate = useNavigate();

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

  const handleJoinEvent = () => {
    if (!user) {
      toast.warning("Please login to join the event");
      navigate("/login");
    }
    const joinData = {
      eventId: event?._id,
      title: event?.title,
      location: event.location,
      eventType: event.eventType,
      eventDate: event.eventDate,
      thumbnail: event?.thumbnail,
      createdBy: event.createdBy,
      joinedAt: new Date(),
      joinedBy: user.email,
      userName: user.displayName,
    };

    fetch("http://localhost:3000/joined", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(joinData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success("successfully joined this event");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error);
      });
  };

  if (!event || !event.title) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-7xl mx-auto py-10 px-6 bg-emerald-100 min-h-screen rounded-2xl shadow-sm">
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
          onClick={handleJoinEvent}
          className="btn bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-full"
        >
          Join Event
        </button>
      </div>
    </div>
  );
};

export default EventDetail;
