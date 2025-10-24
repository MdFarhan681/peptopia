import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const slides = [
  {
    id: 1,
    title: "Keep Your Pets Cozy This Winter",
    desc: "Discover the best winter care services and tips for your furry friends.",
    img: "https://i.ibb.co.com/1t3D2QkS/slide1.jpg",
  },
  {
    id: 2,
    title: "Warm Coats, Happy Pets",
    desc: "Find the perfect winter outfit for your dog or cat.",
    img: "https://i.ibb.co.com/0y64ztX5/slide2.jpg",
  },
  {
    id: 3,
    title: "Expert Grooming for the Cold Season",
    desc: "Protect your pets' paws and fur with professional care.",
    img: "https://i.ibb.co.com/RGpGW4gK/slide3.jpg",
  },
];

const Slider = () => {
  return (
    <div className='w-full px-[0%]'> <div className="w-full max-w-full mx-auto rounded-2xl overflow-hidden shadow-xl ">
      <Swiper
        modules={[ Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="relative z-10 text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl">{slide.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
      
    </div>
  )
}

export default Slider
