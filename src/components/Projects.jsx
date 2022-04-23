import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import Imgshot1 from '../assets/shot1.png';
import Imgshot2 from '../assets/shot2.png';
import Imgshot3 from '../assets/shot3.png';
import Imgshot4 from '../assets/shot4.png';



const Projects = () => {
  const Info = [
    {
      img1: Imgshot1,
    },
    {
      img2: Imgshot2,
    },
    {
      img3: Imgshot3,
    },
    {
      img4: Imgshot4,
    },
  ]

  return(
    <div name="projects" className="mb-4">
    <h1 className="font-bold text-3xl text-center mx-auto my-8">
      My Projects
    </h1>
    <p className="font-semibold text-center mx-auto mb-4">
      Checkout some of my recent localhost websites
    </p>
    <Swiper
    loop={true}
    grabCursor={true}
    spaceBetween={30}
    centeredSlides={true}
    pagination={{
      clickable: true,
    }}
    modules={[Pagination]}
    breakpoints={{
      1024:{
        slidesPerView:3
      },
      600:{
        slidesPerView:2
      },
      400:{
        slidesPerView:1
      },
    }}
    className="mySwiper pt-20 px-4 py-20"
  >
    <SwiperSlide>
      {
        Info.map((links, i) => (
          <div key={i}>
            <img src={links.img1} alt="/" />
          </div>
        ))
      }
    </SwiperSlide>
    <SwiperSlide>
      {
        Info.map((links, i) => (
          <div key={i}>
            <img src={links.img2} alt="/" />
          </div>
        ))
      }
    </SwiperSlide>
    <SwiperSlide>
      {
        Info.map((links, i) => (
          <div key={i}>
            <img src={links.img3} alt="/" />
          </div>
        ))
      }
    </SwiperSlide>
    <SwiperSlide>
      {
        Info.map((links, i) => (
          <div key={i}>
            <img src={links.img4} alt="/" />
          </div>
        ))
      }
    </SwiperSlide>
  </Swiper>
    </div>
  );
}

export default Projects;
