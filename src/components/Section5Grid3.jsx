import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";


const imgGrid7 = require('../assets/section5Grid/hombre1.png')
const imgGrid8 = require('../assets/section5Grid/hombre2.png')
const imgGrid9 = require('../assets/section5Grid/hombre3.png')

const Section5Grid3 = () => {
  return (
    <>

<Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        modules={[Pagination]}
        className="mySwiper container mb-5"
      >
        <SwiperSlide>
        <img src={imgGrid7} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid8} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>          
        <img src={imgGrid9} className="card-img-top" alt="..." />
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Section5Grid3