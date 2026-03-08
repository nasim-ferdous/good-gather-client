import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const navigate = useNavigate();

  const handleCreateEvent = (e) => {
    e.preventDefault();
    if (!eventDate) return toast.error("Please select a date");

    const formData = {
      title: e.target.title.value,
      description: e.target.description.value,
      eventType: e.target.eventType.value,
      thumbnail: e.target.thumbnail.value,
      location: e.target.location.value,
      eventDate,
      createdBy: user?.email,
      createdAt: new Date(),
    };

    fetch("https://good-gather-server.vercel.app/events", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Successfully created event");
        navigate("/up-coming-event");
      })
      .catch((error) => toast.error(error.message));
  };

  // Shared input class for consistency
  const inputClass =
    "w-full px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-emerald-500 outline-none transition-all";
  const labelClass =
    "block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2";

  return (
    <div className="min-h-screen py-10 px-6 transition-colors">
      <title>Create Event</title>
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-700">
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white text-center mb-10">
          Create New <span className="text-emerald-600">Event</span>
        </h2>

        <form onSubmit={handleCreateEvent} className="space-y-6">
          <div>
            <label className={labelClass}>Event Title</label>
            <input
              type="text"
              name="title"
              required
              className={inputClass}
              placeholder="e.g. Community Beach Cleanup"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Event Type</label>
              <select name="eventType" required className={inputClass}>
                <option value="" disabled selected>
                  Select type
                </option>
                <option value="Cleanup">Cleanup</option>
                <option value="Plantation">Plantation</option>
                <option value="Donation">Donation</option>
                <option value="Education">Education</option>
                <option value="Health">Health</option>
              </select>
            </div>
            <div>
              <label className={labelClass}>Event Date</label>
              <DatePicker
                selected={eventDate}
                onChange={(date) => setEventDate(date)}
                minDate={new Date()}
                className={`${inputClass} w-full`}
                placeholderText="Select date"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>

          <div>
            <label className={labelClass}>Thumbnail URL</label>
            <input
              type="url"
              name="thumbnail"
              required
              className={inputClass}
              placeholder="https://..."
            />
          </div>

          <div>
            <label className={labelClass}>Location</label>
            <input
              type="text"
              name="location"
              required
              className={inputClass}
              placeholder="City, District"
            />
          </div>

          <div>
            <label className={labelClass}>Description</label>
            <textarea
              name="description"
              required
              rows="4"
              className={inputClass}
              placeholder="Share details about the event..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-slate-900/50 dark:bg-white text-white dark:text-slate-900 dark:hover:bg-slate-200 hover:cursor-pointer font-bold py-4 rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
