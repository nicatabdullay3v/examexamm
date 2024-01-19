import React from 'react'
import "./Header.scss"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Header = () => {
    return (
        <>
<div className="newheader">
<Swiper
      // install Swiper modules
      modules={[Navigation, Pagination,Autoplay, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={
        {
            delay:4000
        }
      }
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>   <header>
                <div className="container">

                    <div className="header">
                        <div className="text">
                            <div className="title">
                                <p>Food and more<span>.</span></p>
                                <p style={{ fontSize: "15px", textAlign: "end" }}>By Chef Francis Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header></SwiperSlide>
      <SwiperSlide>   <header>
                <div className="container">

                    <div className="header">
                        <div className="text">
                            <div className="title">
                                <p>Food and more<span>.</span></p>
                                <p style={{ fontSize: "15px", textAlign: "end" }}>By Chef Francis Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header></SwiperSlide>
      <SwiperSlide>   <header>
                <div className="container">

                    <div className="header">
                        <div className="text">
                            <div className="title">
                                <p>Food and more<span>.</span></p>
                                <p style={{ fontSize: "15px", textAlign: "end" }}>By Chef Francis Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header></SwiperSlide>
      <SwiperSlide>   <header>
                <div className="container">

                    <div className="header">
                        <div className="text">
                            <div className="title">
                                <p>Food and more<span>.</span></p>
                                <p style={{ fontSize: "15px", textAlign: "end" }}>By Chef Francis Smith</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header></SwiperSlide>
    </Swiper>
</div>
         
        </>
    )
}

export default Header