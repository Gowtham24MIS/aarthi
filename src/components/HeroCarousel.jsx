import { useEffect, useState } from "react";
import { heroData } from "../data/heroData";
import HeroSlide from "./HeroSlide";

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroData.length);
    }, 3000); // change every 3 sec

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl top-[100px] h-screen">
      
      {/* Slides container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroData.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </div>

    </div>
  );
};

export default HeroCarousel;