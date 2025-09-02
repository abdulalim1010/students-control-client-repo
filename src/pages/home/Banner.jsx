import React, { useState, useEffect } from "react";


const slides = [
  {
    image: "https://i.ibb.co.com/WNFnMfzL/students1.jpg",
    title: "Welcome to Students Toolkit",
    subtitle: "All the tools you need for your academic journey",
  },
  {
    image: "https://i.ibb.co.com/cK0Y0KM4/students2.jpg",
    title: "Organize Your Study Materials",
    subtitle: "Keep everything in one place and study smarter",
  },
  {
    image: "https://i.ibb.co.com/fV5S6SFx/students3.jpg",
    title: "Learn and Grow",
    subtitle: "Resources, tools, and guides for tech enthusiasts",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fadeIn">
              {slide.title}
            </h1>
            <p className="text-xl md:text-2xl text-white animate-fadeIn">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrent(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
}
