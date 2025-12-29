"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { heading, paraText, buttonPrimary  } from "../style/ui";

const placementCandidates = [
  {
    name: "Sushma",
    location: "Noida",
    designation: "Remote Support Engineer – Wipro",
    image: "/assest/p1.jpg",
  },
  {
    name: "Rahul",
    location: "Bangalore",
    designation: "Software Engineer – TCS",
    image: "/assest/p1.jpg",
  },
  {
    name: "Anjali",
    location: "Hyderabad",
    designation: "QA Analyst – Infosys",
    image: "/assest/p1.jpg",
  },
  {
    name: "Amit",
    location: "Pune",
    designation: "Frontend Developer – Accenture",
    image: "/assest/p1.jpg",
  },
];

const PlacementSlider = () => {
  return (
    <section
      className="w-full py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/assest/place2.jpg')",
      }}
    >

        
       <h1 className={`${heading} text-center mb-10`}>
                Explore Top Subjects
              </h1>
      {/* Optional overlay */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {placementCandidates.map((item, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <div className="w-[260px] h-[260px] bg-white/90 rounded-full shadow-lg flex flex-col items-center justify-center text-center p-4 backdrop-blur-sm">

                  <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white mb-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-[#2b2f8f] font-semibold text-sm">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-500">{item.location}</p>
                  <p className="text-xs text-gray-600 mt-1">
                    {item.designation}
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>
    </section>
  );
};

export default PlacementSlider;
