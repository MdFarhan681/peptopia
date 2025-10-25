import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    id: 1,
    name: "Sarah Tasnim",
    rating: 5,
    comment:
      "Amazing service! The team took excellent care of my pets during the winter. Highly recommend!",
    image: "https://i.ibb.co.com/QjM8Gsb2/woman1.jpg", 
  },
  {
    id: 2,
    name: "Muhammad Jaber",
    rating: 4,
    comment:
      "Very professional and caring staff. My cat loved the grooming session.",
    image: "https://i.ibb.co.com/7dLrnrMw/mann.jpg",
  },
  {
    id: 3,
    name: "Emma Jahan",
    rating: 5,
    comment:
      "Great experience! They provided helpful tips on winter care for my cat.",
    image: "https://i.ibb.co.com/cSDgPMmt/woman.png",
  },
  {
    id: 4,
    name: "Liam Brown",
    rating: 4,
    comment:
      "Friendly staff and excellent service. My pets felt safe and happy.",
    image: "https://i.ibb.co.com/FSbtMG1/serjon.webp",
  },
];

const Review = () => {
  return (
    <section className="w-full py-12 px-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          What Our Customers Say
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-40"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="card h-[230px] flex flex-col shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 bg-white p-5">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover border border-blue-400"
                    />
                    <div className="text-left">
                      <h3 className="font-semibold text-sm text-secondary">
                        {review.name}
                      </h3>
                      <p className="text-yellow-400 font-bold">
                        {"★".repeat(review.rating) + "☆".repeat(5 - review.rating)}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-[.9rem] leading-relaxed mb-4">
                    {review.comment}
                  </p>
                  <div>
                    <button className="btn btn-sm bg-blue-100 text-blue-800 border-none rounded-full hover:bg-blue-200">
                      Read More
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

export default Review;
