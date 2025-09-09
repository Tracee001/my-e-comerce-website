import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    title: "Welcome to Zevoria",
    desc: "Discover the best products, unbeatable deals, and fast shipping.",
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
    btn: "Shop Now",
  },
  {
    title: "Latest Electronics",
    desc: "Find the newest gadgets and tech at great prices.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
    btn: "Explore Electronics",
  },
  {
    title: "Fashion Trends",
    desc: "Upgrade your wardrobe with trending styles.",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=1600&q=80",
    btn: "Shop Fashion",
  },
  {
    title: "Home & Living",
    desc: "Beautify your space with our home decor collection.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80",
    btn: "Browse Home",
  },
  {
    title: "Groceries & Essentials",
    desc: "Get your daily needs delivered fast.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1600&q=80",
    btn: "Shop Groceries",
  },
];

const Hero = () => (
  <section className="relative">
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false}
      interval={5000}
      className="hero-carousel"
    >
      {slides.map((slide, idx) => (
        <div key={idx} className="relative h-[500px] md:h-[650px] w-full">
          {/* Background Image */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          
          {/* Text Content */}
          <div className="absolute inset-0 flex flex-col items-center md:items-start justify-center max-w-6xl mx-auto px-6 text-white">
            <h1 className="text-3xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-lg md:text-2xl mb-6 max-w-xl drop-shadow-md">
              {slide.desc}
            </p>
            <button className="bg-red-600 hover:bg-yellow-300 text-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300">
              {slide.btn}
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  </section>
);

export default Hero;
