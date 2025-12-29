import React from "react";
import img1 from "../../assets/ede.jpg";

import Discover from "../../components/Discover";

function OurStory() {
  return (
    <section className="hero min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 py-10 bg-base-100">
      <div className="hero-content flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
        
        {/* 🖼️ الصور */}
        <div className="relative flex justify-center">
          {/* خلفية ملونة خلف الصورة */}
          <div className="absolute -bottom-4 -right-4 bg-[#FFB568] w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] -z-10 rounded-xl"></div>
            <figure className="hover-gallery">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center">
            <img src={img1} className="w-[250px] sm:w-[280px] md:w-[320px] lg:w-[350px] rounded-lg object-cover" alt="Story 1" />
          </div>
          </figure>
        </div>

        {/* 📝 النص */}
        <div className="text-center lg:text-left max-w-lg">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#2E2E2E]">
            Our Story
          </h2>

          <h1 className="py-6 text-[#2E2E2E] text-3xl sm:text-4xl md:text-[40px] font-bold leading-tight">
            Inspirational Watch of <br /> this year
          </h1>

          <p className="text-gray-600 text-base sm:text-lg mb-5 px-2 sm:px-0">
            The latest and modern watches of this year are available in various
            presentations in this store. Discover them now.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Discover />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
