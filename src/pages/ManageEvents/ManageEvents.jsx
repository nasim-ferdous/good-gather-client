import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import { FaCalendarAlt, FaEdit, FaMapMarkerAlt } from "react-icons/fa";
import { IoLeaf } from "react-icons/io5";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";

const ManageEvents = () => {
  const { user } = use(AuthContext);
  const [events, setEvents] = useState([]);
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/my-events?email=${user.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data.result);
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
        fetch(`http://localhost:3000/events/${id}`, {
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

  if (!events) {
    return <Loading></Loading>;
  }

  return (
    <div className="min-h-screen bg-emerald-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
        Manage Your Events
      </h2>

      {events.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t created any events yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <div
              key={event._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-semibold text-emerald-800">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm">{event.location}</p>
                <div className="flex justify-between pt-3">
                  <Link
                    to={`/update-event/${event._id}`}
                    className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 text-white rounded-full"
                  >
                    Update
                  </Link>
                  <button
                    onClick={() => handleDelete(event._id)}
                    className="btn btn-sm bg-red-500 hover:bg-red-600 text-white rounded-full"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageEvents;
