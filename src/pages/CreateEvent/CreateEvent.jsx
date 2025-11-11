import React, { use, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthPRovider";
import { toast } from "react-toastify";

const CreateEvent = () => {
  const { user } = use(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  console.log(user.email);

  const handleCreateEvent = (e) => {
    e.preventDefault();

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
    console.log(formData);
    fetch("http://localhost:3000/events", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("successfully created event");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="card border border-gray-200 bg-emerald-50 w-full max-w-2xl mx-auto my-12 shadow-2xl rounded-2xl">
      <div className="card-body p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-800">
          Create New Event
        </h2>

        <form onSubmit={handleCreateEvent} className="space-y-5">
          <div>
            <label className="label font-semibold text-emerald-700">
              Event Title
            </label>
            <input
              type="text"
              name="title"
              required
              className="input w-full bg-white rounded-full focus:outline-emerald-200"
              placeholder="Enter event title"
            />
          </div>

          <div>
            <label className="label font-semibold text-emerald-700">
              Event Type
            </label>
            <select
              defaultValue={""}
              name="eventType"
              required
              className="select w-full bg-white rounded-full focus:outline-emerald-200"
            >
              <option value="" disabled>
                Select event type
              </option>
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
              required
              rows="4"
              className="textarea w-full bg-white rounded-2xl focus:outline-emerald-200"
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
              required
              className="input w-full bg-white rounded-full focus:outline-emerald-200"
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
              required
              className="input w-full bg-white rounded-full focus:outline-emerald-200"
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
              className="input w-full bg-white rounded-full"
              placeholderText="Select event date"
              dateFormat="dd/MM/yyyy"
            />
          </div>

          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700"
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;
