import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const tips = [
  {
    id: 1,
    title: "Keep Paws Dry & Safe",
    description:
      "Always wipe your pet’s paws after walks to remove ice, salt, and chemicals that can irritate their pads.",
    image: "https://i.ibb.co.com/JRpDYNrf/Screenshot-2025-10-22-081401.png",
  },
  {
    id: 2,
    title: "Warm Bedding is Essential",
    description:
      "Provide a soft, warm bed away from cold floors or drafts. Heated mats or fleece blankets work great!",
    image: "https://i.ibb.co.com/8DdVw5Jp/bedcat.webp",
  },
  {
    id: 3,
    title: "Stay Active Indoors",
    description:
      "Short play sessions indoors help pets burn energy and stay fit when outdoor walks are limited.",
    image: "https://i.ibb.co.com/C5Dr66pP/active-Dog.jpg",
  },
  {
    id: 4,
    title: "Check Nutrition & Hydration",
    description:
      "Ensure pets get balanced meals and fresh water. Winter air can dehydrate them faster than you think!",
    image: "https://i.ibb.co.com/XZW7SWSZ/Screenshot-2025-10-23-182858.png",
  },
];

const WinterCareTips = () => {
  return (
    <section className=" w-full py-12 px-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
         Winter Care Tips for Pets
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-40"
        >
          {tips.map((tip) => (
            <SwiperSlide key={tip.id}>
              <div className="card  h-[380px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
                <figure className="h-50 w-full overflow-hidden ">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </figure>
                <div className="flex flex-col justify-between p-5 text-left">
                  <div>
                    <h3 className="font-semibold text-sm text-secondary mb-1">
                      {tip.title}
                    </h3>
                    <p className="text-gray-400 text-[.8rem] leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                  <div className="mt-4">
                    <button className="btn btn-sm bg-blue-100 text-blue-800 border-none rounded-full hover:bg-blue-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WinterCareTips;
