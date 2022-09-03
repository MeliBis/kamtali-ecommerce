import {Link} from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from "react";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ropaDama1 = require('../assets/ropaDama/10.png')
const ropaDama2 = require('../assets/ropaDama/2.png')
const ropaDama3 = require('../assets/ropaDama/3.png')
const ropaDama4 = require('../assets/ropaDama/4.png')
const ropaDama5 = require('../assets/ropaDama/5.png')
const ropaDama6 = require('../assets/ropaDama/6.png')
const ropaDama7 = require('../assets/ropaDama/7.png')
const ropaDama8 = require('../assets/ropaDama/8.png')
const ropaDama10 = require('../assets/ropaDama/10.png')
const ropaDama12 = require('../assets/ropaDama/12.png')
const ropaDama13 = require('../assets/ropaDama/13.png')
const ropaDama14 = require('../assets/ropaDama/14.png')
const ropaCaballero1 = require('../assets/ropaCaballero/1.png')
const ropaCaballero2 = require('../assets/ropaCaballero/2.png')
const ropaCaballero3 = require('../assets/ropaCaballero/3.png')



const Section4 = () => {
  return (
    <>


        <div className=" mt-5  ">
        <h3 className='container'>Ofertas del día</h3>
     </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        slidesPerGroup={3}
        
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper container"
      >
        <SwiperSlide>

      <div className="card mt-5 me-5 " style={{width: '18rem'}}>
              <img src={ropaDama1} className="card-img-top" alt="..." />
          <div className="card-body">
              <h5 className="card-title">Todas a la moda</h5>
              <p className="card-text">$230.00</p>
              <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
              <div >
            <ul className="d-flex justify-content-between list-unstyled">
                <li>

            <Link to='/ListaDeseosPage' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Link> 
                </li>


                <li>

              <Link to='/orden' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
             </Link> 

                </li>
            </ul>
              </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="card mt-5 me-2" style={{width: '18rem'}}>
            <img src={ropaDama2} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Todas a la moda</h5>
            <p className="card-text">$230.00</p>
            <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
            <div >
            <ul className="d-flex justify-content-between list-unstyled">
                <li>

            <Link to='/ListaDeseosPage' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Link> 
                </li>


                <li>

              <Link to='/orden' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
             </Link> 

                </li>
            </ul>
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="card mt-5 me-2" style={{width: '18rem'}}>
            <img src={ropaDama3} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Todas a la moda</h5>
            <p className="card-text">$230.00</p>
            <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
            <div >
            <ul className="d-flex justify-content-between list-unstyled">
                <li>

            <Link to='/ListaDeseosPage' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Link> 
                </li>


                <li>

              <Link to='/orden' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
             </Link> 

                </li>
            </ul>
            </div>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>

        <div className="card mt-5 me-2" style={{width: '18rem'}}>
            <img src={ropaDama4} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Todas a la moda</h5>
            <p className="card-text">$230.00</p>
            <p className="card-text mt-3"><small className="text-muted">Tendencia </small></p>
            <div>
            <ul className="d-flex justify-content-between list-unstyled">
                <li>

            <Link to='/ListaDeseosPage' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Link> 
                </li>


                <li>

              <Link to='/orden' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
             </Link> 

                </li>
            </ul>
            </div>
        </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>

        <div className="card mt-5 me-2" style={{width: '18rem'}}>
            <img src={ropaDama5} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Todas a la moda</h5>
            <p className="card-text">$230.00</p>
            <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
            <div >
            <ul className="d-flex justify-content-between list-unstyled">
                <li>

            <Link to='/ListaDeseosPage' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Link> 
                </li>


                <li>

              <Link to='/orden' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
             </Link> 

                </li>
            </ul>
            </div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>

        <div className="card mt-5 me-2" style={{width: '18rem'}}>
            <img src={ropaDama6} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">Tados a la moda</h5>
            <p className="card-text">$230.00</p>
            <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
            <div>
            <ul className="d-flex justify-content-between list-unstyled">
                <li>

            <Link to='/ListaDeseosPage' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
              </svg>
              </Link> 
                </li>


                <li>

              <Link to='/orden' className="text-reset">
              <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
              </svg>
             </Link> 

                </li>
            </ul>
            </div>
        </div>
        </div>

        </SwiperSlide>
        <SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaDama7} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaDama8} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaDama10} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>

<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaDama12} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>

<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaDama13} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaDama14} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaCaballero1} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaCaballero2} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>
<SwiperSlide>

<div className="card mt-5 me-2" style={{width: '18rem'}}>
    <img src={ropaCaballero3} className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Todas a la moda</h5>
    <p className="card-text">$230.00</p>
    <p className="card-text mt-3"><small className="text-muted">Tendencia</small></p>
    <div>
    <ul className="d-flex justify-content-between list-unstyled">
        <li>

    <Link to='/ListaDeseosPage' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
          <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
      </svg>
      </Link> 
        </li>


        <li>

      <Link to='/orden' className="text-reset">
      <svg xmlns="http://www.w3.org/2000/svg" width="20"  fill="currentColor" class="bi bi-bag-plus " viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"/>
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
      </svg>
     </Link> 

        </li>
    </ul>
    </div>
</div>
</div>

</SwiperSlide>


      </Swiper>
<br /><br />
    </>
  )
}

export default Section4;