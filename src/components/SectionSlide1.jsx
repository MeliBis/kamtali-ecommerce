import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation,esLint } from "swiper";

// import required modules
const imgPublicidad1 = require('../assets/publicidad/publicidad1.jpg')
 const imgPublicidad2 = require('../assets/publicidad/publicidad2.jpg')
const imgPublicidad3 = require('../assets/publicidad/publicidad3.jpg')
 
export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img src={imgPublicidad1} className="card-img-top" height={850} alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgPublicidad2} className="card-img-top" height={850} alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgPublicidad3} className="card-img-top"height={850} alt="..." />

        </SwiperSlide>
 
      </Swiper>
    </>
  );
}