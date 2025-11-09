import React from "react";
import {
  FaCalendarCheck,
  FaHandshakeAngle,
  FaLeaf,
  FaPeopleGroup,
} from "react-icons/fa6";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: <FaCalendarCheck className="text-emerald-600" size={36} />,
      title: "Create & Join Events",
      description:
        "Host or participate in meaningful local events that uplift communities.",
    },
    {
      id: 2,
      icon: <FaPeopleGroup className="text-emerald-600" size={36} />,
      title: "Connect with People",
      description: "Meet like-minded individuals passionate about social good.",
    },
    {
      id: 3,
      icon: <FaLeaf className="text-emerald-600" size={36} />,
      title: "Sustainable Impact",
      description:
        "Focus on long-term community growth through small, consistent efforts.",
    },
    {
      id: 4,
      icon: <FaHandshakeAngle className="text-emerald-600" size={36} />,
      title: "Volunteer Recognition",
      description:
        "Your good deeds matter — track your participation and contributions.",
    },
  ];

  return (
    <div className="bg-white py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
        Why Choose GoodGather?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition bg-emerald-50 hover:bg-emerald-100"
          >
            <div className="flex justify-center mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-center text-emerald-700 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center text-sm">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
