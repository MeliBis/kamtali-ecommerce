import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";

const imgGrid1 = require('../assets/section5Grid/mujer1.png')
const imgGrid2 = require('../assets/section5Grid/mujer2.png')
const imgGrid3 = require('../assets/section5Grid/mujer3.png')
const imgGrid4 = require('../assets/section5Grid/mujer4.png')
const imgGrid5 = require('../assets/section5Grid/mujer5.png')
const imgGrid6 = require('../assets/section5Grid/mujer6.png')
const imgGrid7 = require('../assets/section5Grid/hombre1.png')
const imgGrid8 = require('../assets/section5Grid/hombre2.png')
const imgGrid9 = require('../assets/section5Grid/hombre3.png')





const Section5Grid = () => {
  return (
    <>
 <Swiper
        slidesPerView={3}
        grid={{
          rows: 2,
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Grid, Pagination]}
        className="mySwiper container row row-cols- row-cols-sm-2 row-cols-md-3 g-3 ">

        
        <SwiperSlide className="r">
          <div className=" col">

              <img src={imgGrid2} className="bd-placeholder-img card-img-top" alt="..." />
          </div>
        </SwiperSlide>
 
        <SwiperSlide className="">
          <div className=" col">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <img src={imgGrid2} className="bd-placeholder-img card-img-top" alt="..." />
            </div>
          </div>
        </SwiperSlide>   <SwiperSlide className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className=" col">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <img src={imgGrid2} className="bd-placeholder-img card-img-top" alt="..." />
            </div>
          </div>
        </SwiperSlide>

   <SwiperSlide className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className=" col">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              <img src={imgGrid2} className="bd-placeholder-img card-img-top" alt="..." />
            </div>
          </div>
        </SwiperSlide>



{/* 

        <SwiperSlide className="row">
        <img src={imgGrid3} className="col" alt="..." />
        </SwiperSlide>
        <SwiperSlide className="row">
        <img src={imgGrid4} className="col" alt="..." />
        </SwiperSlide>
        <SwiperSlide className="row">
        <img src={imgGrid5} className="col" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid6}  alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid7}  alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid8}  alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid9}  alt="..." />


        </SwiperSlide> */}
      </Swiper>

    </>
  )
}

export default Section5Grid