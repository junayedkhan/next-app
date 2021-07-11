import React, { useRef, useState } from "react";
import Image from 'next/image'
import img from "../public/Redmi-Note-10-series-launch-featured-324589.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import 'swiper/swiper-bundle.css';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import style from "../styles/Hero.module.css"
// Import Swiper styles
import "swiper/components/pagination/pagination.min.css"
// import Swiper core and required modules
import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper/core';
// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function Hero() {
  
  return (
    <>
    <Swiper pagination={true} className="mySwiper" navigation={true} loop={true}>
        <SwiperSlide>
            <div className={style.hero}>
                <Image src={img} alt=""  layout="fill"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.hero}>
                <Image src={img} alt=""  layout="fill"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.hero}>
                <Image src={img} alt=""  layout="fill"/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={style.hero}>
                <Image src={img} alt=""  layout="fill"/>
            </div>
        </SwiperSlide>
    </Swiper>
    </>
  )
}