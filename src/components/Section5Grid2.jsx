import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";

const imgGrid4 = require('../assets/section5Grid/mujer4.png')
const imgGrid5 = require('../assets/section5Grid/mujer5.png')
const imgGrid6 = require('../assets/section5Grid/mujer6.png')
const Section5Grid2 = () => {
  return (
    <>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        modules={[Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
        <img src={imgGrid4} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid5} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>          
        <img src={imgGrid6} className="card-img-top" alt="..." />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Section5Grid2