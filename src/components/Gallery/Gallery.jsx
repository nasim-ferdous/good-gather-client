import React from "react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1708593343700-a101f8fe4d11?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW50aW5nJTIwdHJlZXMlMjB0b2dldGhlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      title: "Tree Plantation Drive",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559307183-517680cd78d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Um9hZCUyMENsZWFudXAlMjBDYW1wYWlnbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500",
      title: "Road Cleanup Campaign",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1663099731021-0356791304f0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=900",
      title: "Clothes Donation",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1565080971569-fa40cffecd48?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      title: "Education for All",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1628243989859-db92e2de1340?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871",
      title: "Community Gardening",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1632751796718-3185246913ce?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031",
      title: "Free Health Camp",
    },
  ];
  return (
    <div className="bg-emerald-50 py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-emerald-800 mb-10">
        Moments of GoodGather
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {images.map((img) => (
          <div
            key={img.id}
            className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-500"
            />

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
              <img
                src={img.src}
                alt={img.title}
                className="absolute inset-0 w-full h-full object-cover blur-md scale-110 brightness-75"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-emerald-500 text-lg font-semibold drop-shadow-lg bg-black/30 px-3 py-1 rounded-lg backdrop-blur-sm">
                  {img.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
