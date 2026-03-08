import React from "react";
import { motion } from "framer-motion";

const PartnersLogo = () => {
  // Using generic placeholders—replace these with actual company logos
  const partners = [
    {
      name: "Global Green",
      src: "https://as1.ftcdn.net/jpg/01/26/87/86/1000_F_126878652_qFmf46oYRoDVQIYT33gBXlYxbZ221Cch.jpg",
    },
    {
      name: "United Hearts",
      src: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/307702961_156225513706658_4891207760816805583_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeEPVDGNRF0vJRET_b1_vNowcX3zBrB86rVxffMGsHzqtbeE6tHrVwJDx_y5n3HMzQJRCQQmYGdem6FsbgTHo8CU&_nc_ohc=lvSjHSKzIV0Q7kNvwHhTUdv&_nc_oc=Adn5-iEDuxKEPfiRn2UQCfficaBJ0teB2MY2UD9P_w72PPRCqqiA2-c_ryjSKA54IYs&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=Hd1RzNsZG1D5WDyZ7eqaBw&_nc_ss=8&oh=00_AfzZff7tNBqy01QMkvr243aR9T6Sx0S-84m5ZAhMxnwUrQ&oe=69B100D6",
    },
    {
      name: "Urban Bloom",
      src: "https://images.squarespace-cdn.com/content/v1/644cf34b6bd43a5af8eb938d/1683285766255-E4USRSVM1CHE8AVT87TR/portfolio+fotos+werk+batch+1-11.png?format=1500w",
    },
    {
      name: "Future Foundation",
      src: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a499871d-b693-45f6-ae90-f9451fff00da/d8qujky-26fe2e98-50ca-4bf2-8bbd-eb2ff034ae7e.png/v1/fill/w_1192,h_670,q_70,strp/future_foundation_symbol_by_yurtigo_d8qujky-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiIvZi9hNDk5ODcxZC1iNjkzLTQ1ZjYtYWU5MC1mOTQ1MWZmZjAwZGEvZDhxdWpreS0yNmZlMmU5OC01MGNhLTRiZjItOGJiZC1lYjJmZjAzNGFlN2UucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.94AUQR7NIKQ5qJ-5GGsGkSMOlOgR-x2gOiD2833Zsh0",
    },
    {
      name: "Nature Guard",
      src: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/312622143_594522752471461_5556902355214228655_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_eui2=AeHZla4EnT4OL2S5NZXjjQW3n18kl5pFKmSfXySXmkUqZFCWs-LMaOO8Jn18posVPGtkQGpLWfk2AwIlB74pnEUM&_nc_ohc=vsUhTB1tck8Q7kNvwEV1CM7&_nc_oc=Adk8QKigWNblKrfA4rtEQt12P8jRE7zTuMWGRs3jC-UfGaahQbrOEK6aEXTkj-28T38&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=qfuKVeoMLE7tiIWtlxNoxQ&_nc_ss=8&oh=00_AfzanBXy-q_ZpyqFMx19cVnxQjAM0MkgV6DrIMR2j-VGKQ&oe=69B10002",
    },
  ];
  return (
    <section className="py-24 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-10">
        <p className="text-4xl font-bold text-slate-400 uppercase tracking-[0.2em]">
          Trusted by leading community organizations
        </p>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden">
        <motion.div
          className="flex gap-16 lg:gap-24"
          animate={{ x: ["0%", "-50%"] }} // Loops through half the width
          transition={{
            duration: 20, // Adjust speed here
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...partners, ...partners].map((partner, i) => (
            <div
              key={i}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersLogo;
