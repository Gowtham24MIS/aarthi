const HeroSlide = ({ slide }) => {
  return (
    <div className="relative w-full h-screen flex-shrink-0  overflow-y-hidden ">
      
      {/* Image */}
      <img
        src={slide.image}
        alt={slide.title}
        className="w-full h-screen object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.85)_10%,rgba(0,0,0,0.4)_50%,transparent_100%)]"></div>

      {/* Content */}
      <div className="absolute bottom-10 left-10 text-white max-w-xl">
        <h1 className="text-4xl font-semibold mb-4">
          {slide.title}
        </h1>

        <p className="mb-6 text-gray-200">
          {slide.description}
        </p>

        <button className="bg-white text-red-700 px-6 py-2 rounded-full font-semibold">
          Explore
        </button>
      </div>

    </div>
  );
};

export default HeroSlide;