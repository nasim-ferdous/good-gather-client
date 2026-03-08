import React, { use, useEffect, useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaUser } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthPRovider";
import Loading from "../../components/Loading/Loading";
import DetailSkeleton from "./DetailSkeleton";

const EventDetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const { user } = use(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://good-gather-server.vercel.app/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
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

    fetch("https://good-gather-server.vercel.app/joined", {
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
          navigate("/joined-event");
        } else {
          toast.error(data.message);
        }
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (!event) return <DetailSkeleton />;

  return (
    <div className="min-h-screen py-10 px-6 transition-colors">
      <title>Event Detail</title>
      <div className="max-w-7xl mx-auto bg-white dark:bg-slate-800 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden">
        {/* Header Image */}
        <img
          src={event.thumbnail}
          alt={event.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8 md:p-12">
          <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6">
            {event.title}
          </h1>

          {/* Info Bar */}
          <div className="flex flex-wrap gap-4 mb-8">
            {[
              { icon: <FaMapMarkerAlt />, text: event.location },
              {
                icon: <FaCalendarAlt />,
                text: new Date(event.eventDate).toLocaleDateString("en-GB"),
              },
              { icon: <IoLeaf />, text: event.eventType },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full text-slate-700 dark:text-slate-300 text-sm font-medium"
              >
                <span className="text-emerald-500">{item.icon}</span>{" "}
                {item.text}
              </div>
            ))}
          </div>

          <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-10">
            {event.description || "No detailed description provided."}
          </p>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-100 dark:border-slate-700">
            <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 font-medium">
              <FaUser /> Created by: {event.createdBy}
            </div>

            <button
              onClick={handleJoinEvent}
              className="w-full sm:w-auto bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointer font-bold px-10 py-4 rounded-2xl transition-all shadow-lg shadow-emerald-600/20"
            >
              Join This Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
