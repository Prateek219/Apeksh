import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import newsone from '../../images/news-1.jpg'
import doctoreone from '../../images/doctor-1.jpg'

import newstwo from '../../images/news.2.jpg'
import doctoretwo from '../../images/doctor-2.jpg'

import newsthree from '../../images/news-3.jpg'
import doctorethree from '../../images/doctor-3.jpg'

import newsfour from '../../images/news-4.jpg'
import doctorefour from '../../images/doctor-4.jpg'

import newsfive from '../../images/news-5.jpg'
import doctorefive from '../../images/doctor-5.jpg'

import './New.css'

// import required modules
import { Autoplay } from "swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";



function NSlider() {
  return (
    <Swiper
    autoplay={{
        delay:  1000,
    }}
    loop={true}
    modules={[Autoplay]}
    spaceBetween={15}
    slidesPerView={3}


>
        

    <div className="all-sliders-news">
    <SwiperSlide>
                <div className="news-box">
                    <img src={newsone} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoreone} alt="" />
                            <h6>Sally</h6>
                        </div>
                        <div className="date">
                            <FontAwesomeIcon icon={faCalendarCheck} />
                            22 May 2000
                        </div>
                    </div>
                    <p>In This Hospital There Are Special Surgeon</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="news-box">
                    <img src={newstwo} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctoretwo} alt="" />
                            <h6>Maria</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            30 Mars 2003
                        </div>
                    </div>
                    <p>Health Will Be A Thing Of The Past And Here's Why</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="news-box">
                    <img src={newsthree} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctorethree} alt="" />
                            <h6>John Deo</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            11 Mars 2003
                        </div>
                    </div>
                    <p>Dental Care for Women is very important</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="news-box">
                    <img src={newsfour} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctorefour} alt="" />
                            <h6>Maichel</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            14 July 2021
                        </div>
                    </div>
                    <p>Can you get a diflucan prescription online?</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="news-box">
                    <img src={newsfive} alt="" />
                    <div className="info">
                        <div className="name">
                            <img src={doctorefive} alt="" />
                            <h6>Koller</h6>
                        </div>
                        <div className="date">
                        <FontAwesomeIcon icon={faCalendarCheck} />
                            24 Sept 1992
                        </div>
                    </div>
                    <p>Why Is Skin Surgeon Considered Underrated</p>
                    <button>Read More <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
                </div>
        </SwiperSlide>
    </div>
        
  
</Swiper>
  )
}

export default NSlider