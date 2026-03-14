import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  {
    id: 1,
    image: "https://plus.unsplash.com/premium_photo-1682144741954-3a9dcea81dd2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Thermo Green Energy Private Limited",
    desc: "Sustainable energy solutions powering a greener tomorrow.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1588011930968-eadac80e6a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
    title: "Powering a Greener Tomorrow",
    desc: "Delivering efficient and eco-friendly thermal energy systems to homes and industries.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGluZHVzdHJpYWx8ZW58MHx8MHx8fDA%3D",
   title: "Clean Energy for All",
    desc: "Harnessing the power of technology to provide reliable, sustainable energy solutions.",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D",
title: "Sustainable Power Infrastructure",
    desc: "Building innovative infrastructure to reduce carbon footprint and maximize efficiency.",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kdXN0cmlhbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Your Partner in Green Energy",
    desc: "Committed to a cleaner, greener planet through advanced thermal energy solutions.",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt="Thermo Green Energy"
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
            <h1
              data-aos="fade-up"
              className="text-white text-3xl md:text-5xl font-bold mb-4"
            >
              {slide.title}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-gray-200 max-w-2xl mb-6"
            >
              {slide.desc}
            </p>

            <button
              href="/about"
              data-aos="fade-up"
              data-aos-delay="400"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded transition duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
