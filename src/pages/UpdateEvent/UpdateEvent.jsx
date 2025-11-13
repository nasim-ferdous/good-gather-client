import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthPRovider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Loading from "../../components/Loading/Loading";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({});
  const [eventDate, setEventDate] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:3000/events/${id}`)
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

    fetch(`http://localhost:3000/events/${id}`, {
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
  if (!event) {
    return <Loading></Loading>;
  }

  return (
    <div className="card border border-gray-200 bg-emerald-50 dark:bg-emerald-100 w-full max-w-2xl mx-auto my-12 shadow-2xl rounded-2xl">
      <div className="card-body p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-800">
          Update Event
        </h2>

        <form onSubmit={handleUpdateEvent} className="space-y-5">
          <div>
            <label className="label font-semibold text-emerald-700">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={event.title}
              required
              className="input w-full bg-white dark:text-zinc-900  rounded-full focus:outline-emerald-200"
              placeholder="Enter event title"
            />
          </div>

          <div>
            <label className="label font-semibold text-emerald-700">
              Event Type
            </label>
            <select
              name="eventType"
              defaultValue={event.eventType}
              required
              className="select w-full dark:text-zinc-900  bg-white rounded-full focus:outline-emerald-200"
            >
              <option value="">Select event type</option>
              <option value="Cleanup">Cleanup</option>
              <option value="Plantation">Plantation</option>
              <option value="Donation">Donation</option>
              <option value="Education">Education</option>
              <option value="Health">Health</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label className="label font-semibold text-emerald-700">
              Description
            </label>
            <textarea
              name="description"
              defaultValue={event.description}
              required
              rows="4"
              className="textarea w-full bg-white dark:text-zinc-900  rounded-2xl focus:outline-emerald-200"
              placeholder="Write a short description of your event"
            ></textarea>
          </div>
          <div>
            <label className="label font-semibold text-emerald-700">
              Thumbnail URL
            </label>
            <input
              type="url"
              name="thumbnail"
              defaultValue={event.thumbnail}
              required
              className="input w-full bg-white dark:text-zinc-900  rounded-full focus:outline-emerald-200"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div>
            <label className="label font-semibold text-emerald-700">
              Location
            </label>
            <input
              type="text"
              name="location"
              defaultValue={event.location}
              required
              className="input w-full bg-white dark:text-zinc-900  rounded-full focus:outline-emerald-200"
              placeholder="Enter event location"
            />
          </div>
          <div>
            <label className="label font-semibold text-emerald-700">
              Event Date
            </label>
            <br />
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              className="input w-full bg-white dark:text-zinc-900  rounded-full"
              placeholderText="Select event date"
              dateFormat="dd/MM/yyyy"
            />
          </div>
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateEvent;
