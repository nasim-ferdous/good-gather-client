import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router";
import Loading from "../../components/Loading/Loading";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [eventDate, setEventDate] = useState(new Date());

  useEffect(() => {
    fetch(`https://good-gather-server.vercel.app/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data.result);
        setEventDate(new Date(data.result.eventDate));
      })
      .catch((err) => toast.error(err.message));
  }, [id]);

  const handleUpdateEvent = (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnail: e.target.thumbnail.value,
      location: e.target.location.value,
      eventDate,
    };

    fetch(`https://good-gather-server.vercel.app/events/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Event updated successfully!");
        navigate("/manage-event");
      })
      .catch((error) => toast.error(error.message));
  };

  // Shared input class for consistency
  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all";
  const labelClass =
    "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2";

  if (!event) return <Loading />;

  return (
    <div className="min-h-screen py-10 px-6 transition-colors">
      <title>Update Event</title>
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white text-center mb-10">
          Update <span className="text-emerald-600">Event</span>
        </h2>

        <form onSubmit={handleUpdateEvent} className="space-y-6">
          <div>
            <label className={labelClass}>Event Title</label>
            <input
              type="text"
              name="title"
              defaultValue={event.title}
              required
              className={inputClass}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Event Type</label>
              <select
                name="eventType"
                defaultValue={event.eventType}
                required
                className={inputClass}
              >
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Event Date</label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                minDate={new Date()}
                className={`${inputClass} w-full`}
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              defaultValue={event.thumbnail}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Location</label>
            <input
              type="text"
              name="location"
              defaultValue={event.location}
              required
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              name="description"
              defaultValue={event.description}
              required
              rows="4"
              className={inputClass}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointer font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
