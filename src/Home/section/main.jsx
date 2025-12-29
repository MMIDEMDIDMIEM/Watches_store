import React from "react";
import Slider from "./Slider";
import AddToCart from "../../components/AddToCart";
import Discover from "../../components/Discover";
import FeatureCard from "./FeatureCard";
import Products from "./Products";
import OurStory from "./OurStory";
import ContactSection from "../../Home/section/Contact";
import Service from "./Service";
function Main() {
  return (
    <>   <section className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-10 px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-10">
      {/* السلايدر */}
      <div className="relative w-full max-w-[500px] flex justify-center order-1 lg:order-2">
        {/* الخلفية الملونة */}
        <div className="absolute top-[-30px] sm:top-[-50px] md:top-[-70px] w-[80%] sm:w-[90%] h-[350px] sm:h-[450px] md:h-[550px] bg-[#FFB568] rounded-3xl"></div>

        {/* السلايدر */}
        <div className="relative z-10 w-[80%] sm:w-[90%] max-w-[420px]">
          <Slider />
        </div>
      </div>

      {/* النص */}
      <div className="text-center lg:text-left flex flex-col items-center lg:items-start gap-4 order-2 lg:order-1">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-[600px]">
          NEW WATCH COLLECTIONS B720
        </h1>
        <p className="text-sm sm:text-base text-[#595959] max-w-[400px]">
          Latest arrival of the new imported watches of the B720 series, with a
          modern and resistant design.
        </p>


        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 mt-4">
          <Discover />
          <AddToCart />
        </div>
      </div>
    </section>
        
         <Products/>
       {/* <FeatureCard/> */}
       <OurStory/>
             <Service/>

       <ContactSection/>
    </>
    
  );
}

export default Main;
