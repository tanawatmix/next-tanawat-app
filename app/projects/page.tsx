"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import pro from "../images/PRO2.png";
import pro1 from "../images/pro1.png";
import pro2 from "../images/pro3.png";

export default function FeaturedProjects() {
  return (
    <div className="mt-20 px-6">
      <h1 className="text-[35px] font-bold">
        Featured <span className="text-orange-500">Projects</span>
      </h1>
      <div className="mt-5">
        <p className="font-semibold text-[20px]">
          Manage Task App - fullstack web development
        </p>
        <p className="text-gray-400 mt-2 max-w-[700px]">
          Here’s my latest project built with Next.js and Laravel, using
          TailwindCSS on the front-end. Watch the video to see the responsive
          landing page in action!
        </p>
      </div>

      {/* Image Slider */}
      <div className="mt-6 max-w-[750px] ml-25 my-custom-swiper-container"> 
        <Swiper
          pagination={{ clickable: true }}
          modules={[Pagination]}
          spaceBetween={30}
          className="rounded-lg overflow-hidden"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <img
              src={pro1.src}
              alt="Project Screenshot"
              className="rounded-lg w-full h-auto" 
            />
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <img
              src={pro.src}
              alt="Project Screenshot"
              className="rounded-lg w-full h-auto"
            />
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <img
              src={pro2.src}
              alt="Project Screenshot"
              className="rounded-lg w-full h-auto"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}