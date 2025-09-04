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
  <div className="relative mt-6 w-full h-[600px] overflow-hidden">
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
      {/* Overlay div */}
      <div className="absolute inset-0 bg-opacity-40 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {slide.title}
        </h1>
        <p className="text-xl md:text-2xl text-white">
          {slide.subtitle}
        </p>
      </div>
    </div>
  ))}
</div>

  );
}
