import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ExpertVetsStatic = () => {
  return (
    <section className="w-full py-12 px-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Meet Our Expert Vets
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-40"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="card h-[380px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co.com/Pvcxhx7f/cat-Doctor.png"
                  alt="Dr. Emma Wilson"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                    Dr. Emma Wilson
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    Pet Nutrition Specialist
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Expert in balanced winter diets and hydration for pets to
                    stay healthy during cold months.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-blue-100 text-blue-800 border-none rounded-full hover:bg-blue-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="card h-[380px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co.com/rf1LF6vG/serjon.webp"
                  alt="Dr. Liam Carter"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                    Dr. Liam Carter
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    Veterinary Surgeon
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Specializes in winter paw injuries and provides professional
                    pet care for cold weather conditions.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-blue-100 text-blue-800 border-none rounded-full hover:bg-blue-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="card h-[380px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co.com/84KWbxSw/pet-Behave.webp"
                  alt="Dr. Ava Brown"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                    Dr. Ava Brown
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    Pet Behavior Expert
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Helps pet owners manage indoor activity routines and
                    stress-free habits during chilly months.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-blue-100 text-blue-800 border-none rounded-full hover:bg-blue-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="card h-[380px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              <figure className="h-48 w-full overflow-hidden">
                <img
                  src="https://i.ibb.co.com/cShSXcHc/care.jpg"
                  alt="Dr. Noah Miller"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col justify-between p-5 text-left">
                <div>
                  <h3 className="font-semibold text-sm text-secondary mb-1">
                    Dr. Noah Miller
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    Grooming & Skin Care
                  </p>
                  <p className="text-gray-400 text-[.8rem] leading-relaxed">
                    Provides expert advice on coat care and protection from dry
                    skin caused by cold weather.
                  </p>
                </div>
                <div className="mt-4">
                  <button className="btn btn-sm bg-blue-100 text-blue-800 border-none rounded-full hover:bg-blue-200">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ExpertVetsStatic;
