import React from "react";
import { heading, paraText, buttonPrimary  } from "../style/ui";

interface Feature {
  title: string;
  desc: string;
  image: string;
}

const features: Feature[] = [
  {
    title: "AWS DevOps",
    desc: "AWS OpsWorks is a configuration management service that uses Chef, an automation platform that t...",
    image: "/assest/course1.jpg",
  },
  {
    title: "PC Hardware & Networking",
    desc: "100% Jobs Guarantee Based IT Training PC Hardware & Networking Course to become Deskto...",
    image: "/assest/course2.jpg",
  },
  {
    title: "Web Developments",
    desc: "100% Jobs Guarantee Based IT Training PC Hardware & Networking Course to become Deskto...",
    image: "/assest/course3.jpg",
  },
  {
    title: "Java Developments",
    desc: "Java Developer Live Project Based Training Our Training Highlights Live Interactive Sessions ...",
    image: "/assest/course4.jpg",
  },
];

const WhyBrightcode: React.FC = () => {
  return (
    <section className="bg-[#eaf4ff] py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className={`${heading} text-center mb-10`}>
          Explore Top Subjects
        </h1>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              {/* Circle Image */}
              <div className="w-48 h-48 rounded-full border-8 border-orange-400 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-lg font-semibold text-gray-800">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>

              {/* Read More Button */}
                  {/* Read More Button */}
              <button className={buttonPrimary}>
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyBrightcode;
