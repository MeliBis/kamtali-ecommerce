import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation,esLint } from "swiper";

// import required modules
const imgslide1 = require('../assets/ropaDama/19.png')
const imgslide2 = require('../assets/ropaDama/18.png')
const imgslide3 = require('../assets/ropaDama/17.png')
const imgslide4 = require('../assets/ropaDama/16.png')
const imgslide5 = require('../assets/ropaDama/15.png')
const imgslide6 = require('../assets/ropaCaballero/5.png')


export default function App() {
  return (
    <>
      <Swiper
       freeMode={true}
       grabCursor={true}
        slidesPerView={3}
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
            slidesPerGroup:3,
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
        <img src={imgslide1} className="card-img-top"  alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgslide2} className="card-img-top" alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgslide3} className="card-img-top" alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgslide4} className="card-img-top" alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgslide5} className="card-img-top" alt="..." />

        </SwiperSlide>
        <SwiperSlide>
        <img src={imgslide6} className="card-img-top" alt="..." />

        </SwiperSlide>
 
      </Swiper>
    </>
  );
}