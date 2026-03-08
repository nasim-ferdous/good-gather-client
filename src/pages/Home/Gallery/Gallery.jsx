import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FaExpand } from "react-icons/fa";

import "swiper/css";
import "react-photo-view/dist/react-photo-view.css";

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1708593343700-a101f8fe4d11?auto=format&fit=crop&q=80&w=1200",
      title: "Tree Plantation",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1559307183-517680cd78d5?auto=format&fit=crop&q=80&w=1200",
      title: "Road Cleanup",
    },
    {
      id: 3,
      src: "https://plus.unsplash.com/premium_photo-1663099731021-0356791304f0?auto=format&fit=crop&q=80&w=1200",
      title: "Clothes Donation",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1565080971569-fa40cffecd48?auto=format&fit=crop&q=80&w=1200",
      title: "Education for All",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1628243989859-db92e2de1340?auto=format&fit=crop&q=80&w=1200",
      title: "Community Garden",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1632751796718-3185246913ce?auto=format&fit=crop&q=80&w=1200",
      title: "Health Camp",
    },
  ];

  return (
    <section className="py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl font-black text-slate-900 dark:text-white">
          Moments of <span className="text-teal-600">GoodGather</span>
        </h2>
      </div>

      {/* Adding a unique 'group' to PhotoProvider ensures the lightbox works for the list */}
      <PhotoProvider maskOpacity={0.8}>
        <Swiper
          loop={true} // This enables the infinite loop
          slidesPerView={1}
          spaceBetween={24}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay, FreeMode]}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-6"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className="relative h-64 rounded-3xl overflow-hidden shadow-lg group">
                <PhotoView src={img.src}>
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </PhotoView>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 pointer-events-none" />
                <div className="absolute bottom-4 left-4 text-white pointer-events-none">
                  <h3 className="font-bold">{img.title}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaExpand size={12} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </PhotoProvider>
    </section>
  );
};

export default Gallery;
