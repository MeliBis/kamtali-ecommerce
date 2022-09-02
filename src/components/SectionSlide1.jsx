import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation,esLint } from "swiper";

// import required modules
 const imgPublicidad2 = require('../assets/publicidad/publicidad2.jpg')
const imgPublicidad3 = require('../assets/publicidad/publicidad3.jpg')
 
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        centeredSlides={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        
        navigation={true}
        breakpoints={{
          0:{
            slidesPerView: 1,
            spaceBetween:10,

          },
          480:{
            slidesPerView: 3,
            spaceBetween: 10,
            
          },
          7600:{
            slidesPerView: 4,
            spaceBetween: 15,
            
          }
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
        <img src={imgPublicidad3} className="card-img-top"  alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgPublicidad2} className="card-img-top" alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgPublicidad3} className="card-img-top" alt="..." />

        </SwiperSlide>
 
      </Swiper>
    </>
  );
}