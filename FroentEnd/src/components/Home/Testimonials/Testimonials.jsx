import React from 'react'
import "./TestiMonilas.scss"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Testimonials = () => {
    return (
        
        <section id='testi'>
            <div className="container">
                <div className="testi">
                    <div className="text">
                        <div className="icon">
                            <svg style={{ width: "80px" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M367.1 160c.6-5.3 .9-10.6 .9-16C368 64.5 303.5 0 224 0S80 64.5 80 144c0 5.4 .3 10.7 .9 16H80c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H368c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM96 288L200.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L352 288H96z" /></svg>
                        </div>
                        <div className="title">
                            <div className="line1">

                            </div>
                            <h1>
                                Tetimonials
                            </h1>
                            <div className="line2"></div>
                        </div>
                    </div>
                    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide> <div className="down_text">
                        <div className="icon">
                            "
                        </div>
                        <div className="desc">
                            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                            <div className="note">
                                <p>Ted Chapman, <span>Client</span></p>
                            </div>
                        </div>
                    </div></SwiperSlide>
      <SwiperSlide> <div className="down_text">
                        <div className="icon">
                            "
                        </div>
                        <div className="desc">
                            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                            <div className="note">
                                <p>Ted Chapman, <span>Client</span></p>
                            </div>
                        </div>
                    </div></SwiperSlide>
      <SwiperSlide> <div className="down_text">
                        <div className="icon">
                            "
                        </div>
                        <div className="desc">
                            <p>Integer sed facilisis eros. In iaculis rhoncus velit in malesuada. In hac habitasse platea dictumst. Fusce erat ex, consectetur sit amet ornare suscipit, porta et erat. Donec nec nisi in nibh commodo laoreet. Mauris dapibus justo ut feugiat malesuada. Fusce ultricies ante tortor, non vestibulum est feu-giat ut. </p>
                            <div className="note">
                                <p>Ted Chapman, <span>Client</span></p>
                            </div>
                        </div>
                    </div></SwiperSlide>
      ...
    </Swiper>
                   
                </div>
            </div>
        </section>
    )
}

export default Testimonials