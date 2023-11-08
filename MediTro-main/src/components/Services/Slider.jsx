import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import './Services.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDiagnoses, faSyringe, faUserDoctor, faGlobe } from '@fortawesome/free-solid-svg-icons';

function Slider() {
  return (
        <Swiper
        autoplay={{
            delay:  2000,
        }}
        loop={true}
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={3}


    >
            <div className="all-swipers">
            <SwiperSlide>
            <div className="uniq-box one-box">
                <FontAwesomeIcon icon={faDiagnoses} />
                <h2>Best stay</h2>
                <p>Stay at our Apeksh Extensive Care Centers .</p>
                <button>View More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="uniq-box two-box">
                <FontAwesomeIcon icon={faGlobe} />
                <h2>Visa</h2>
                <p>Will arrange you all Visa requiremnts & documents</p>
                <button>View More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="uniq-box three-box">
                <FontAwesomeIcon icon={faUserDoctor} />
                <h2>Surgery</h2>
                <p>Transparent and seamless process with Apeksh </p>
                <button>View More</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>            <div className="uniq-box four-box">
                <FontAwesomeIcon icon={faSyringe} />
                <h2>Medicene</h2>
                <p>Convineint and fast dilevery at no addition cost</p>
                <button>View More</button>
            </div></SwiperSlide>
            </div>
      
    </Swiper>
  )
}

export default Slider