"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Learn & Grow with Us",
        desc: "Build your career with industry-ready courses",
        image: "/assest/banner1.jpg"
    },
    {
        id: 2,
        title: "Upgrade Your Skills",
        desc: "React, JavaScript & Modern Web Development",
        image: "/assest/banner2.jpg",
    },
    {
        id: 3,
        title: "Get Placed Faster",
        desc: "Placement-focused training programs",
        image: "/assest/banner3.png",
    },
];

export default function BannerSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[600px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-contain bg-black"
                        priority
                    />


                    <div className="absolute inset-0 bg-black/40 flex items-center">
                        <div className="text-white px-20">
                            <h1 className="text-4xl font-bold mb-3">
                                {slide.title}
                            </h1>
                            <p className="text-lg">
                                {slide.desc}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
