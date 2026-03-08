import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import { FaCalendarAlt, FaEdit, FaMapMarkerAlt, FaTrash } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";
import Swal from "sweetalert2";
import ManageSkeleton from "./ManageSkeleton";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState(null);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://good-gather-server.vercel.app/my-events?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${user.accessToken}`,
          },
        },
      )
        .then((res) => res.json())
        .then((data) => {
          setEvents(data.result);
        })
        .catch((error) => {
          toast.error(error.message);
        });
    }
  }, [user, refetch]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this event!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://good-gather-server.vercel.app/events/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
            setRefetch(!refetch);
            Swal.fire({
              title: "Deleted!",
              text: "Your event has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            toast.error(error.message);
          });
      }
    });
  };

  return (
    <div className="min-h-screen  py-10 px-6 transition-colors duration-300">
      <title>Manage events</title>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white text-center mb-16">
          Manage Your <span className="text-emerald-600">Events</span>
        </h2>

        {!events ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[...Array(8)].map((_, i) => (
              <ManageSkeleton key={i} />
            ))}
          </div>
        ) : events.length === 0 ? (
          <div className="text-center py-20 text-slate-500">
            You haven’t created any events yet.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((event) => (
              <div
                key={event._id}
                className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-all"
              >
                {/* Reduced image height */}
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-36 object-cover"
                />

                <div className="p-4 flex flex-col flex-grow">
                  {/* Tighter font and spacing */}
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 line-clamp-1">
                    {event.title}
                  </h3>

                  <div className="space-y-1.5 mb-4 text-xs text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-emerald-500" />{" "}
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-emerald-500" />{" "}
                      {new Date(event.eventDate).toLocaleDateString("en-GB")}
                    </div>
                    <div className="flex items-center gap-2">
                      <IoLeaf className="text-emerald-500" /> {event.eventType}
                    </div>
                  </div>

                  {/* Buttons with smaller padding */}
                  <div className="mt-auto flex gap-2 pt-3 border-t border-slate-100 dark:border-slate-700">
                    <button
                      onClick={() => handleDelete(event._id)}
                      className="flex-1 bg-red-50 hover:bg-red-100 text-red-600 py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaTrash size={12} /> Delete
                    </button>
                    <Link
                      to={`/update-event/${event._id}`}
                      className="flex-1 bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointer py-1.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-1.5"
                    >
                      <FaEdit size={12} /> Update
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageEvents;
