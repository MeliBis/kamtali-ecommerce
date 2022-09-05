import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";


// import required modules
import { Grid, Pagination } from "swiper";
/* import "../styles/stylesGrid.css";
 */
const imgGrid1 = require('../assets/ropaDama/1.png')
const imgGrid2 = require('../assets/section5Grid/mujer2.png')
const imgGrid3 = require('../assets/section5Grid/mujer3.png')






const Section5Grid = () => {
  return (
    <>
    <h3 className="container mb-4">Lo más nuevo</h3>


     

<Swiper
        slidesPerView={3}
        spaceBetween={30}
       
        modules={[Pagination]}
        className="mySwiper container"
      >
        <SwiperSlide>
        <img src={imgGrid1} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>
        <img src={imgGrid2} className="card-img-top" alt="..." />
        </SwiperSlide>
        <SwiperSlide>          
        <img src={imgGrid3} className="card-img-top" alt="..." />
        </SwiperSlide>
      </Swiper>
      

    </>
  )
}

export default Section5Grid