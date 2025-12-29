// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/home 1.png";
import img2 from "../../assets/home 1.png";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function Slider() {
  return (
    <div className="w-full flex justify-center">
      <Swiper
        direction="vertical"
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[ Autoplay]}
        className="mySwiper w-[420px] h-[500px] rounded-2xl  overflow-hidden"
      >
        <SwiperSlide>
          <img
            src={img1}
            alt="Hotel 1"
            className="w-full h-full object-cover"
          />

          
        </SwiperSlide>

      

         
      </Swiper>
    </div>
  );
}
