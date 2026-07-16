import { useRef } from "react";
import { products } from "../data/productsData";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "swiper/css";

function Products() {
  const swiperRef = useRef(null);

  return (
    <section
      id="products"
      className="py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex justify-between items-start mb-16">

          <div>
            <h2 className="text-5xl font-bold text-[#07162D] mb-6">
              THE FUTURE WE'RE BUILDING
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl">
              Our vision extends beyond technology,
              with businesses spanning education and
              membership-driven platforms.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">

            <button
              onClick={() =>
                swiperRef.current?.slidePrev()
              }
              className="w-12 h-12 border rounded-2xl flex items-center justify-center hover:bg-gray-100 transition"
            >
              <FiChevronLeft size={22} />
            </button>

            <button
              onClick={() =>
                swiperRef.current?.slideNext()
              }
              className="w-12 h-12 border rounded-2xl flex items-center justify-center hover:bg-gray-100 transition"
            >
              <FiChevronRight size={22} />
            </button>

          </div>
        </div>

        {/* Swiper */}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={800}
          grabCursor={true}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            // make swiper accessible from navbar
            window.productsSwiper = swiper;
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>

              <div
                className={`
                  rounded-[32px]
                  p-10
                  min-h-[380px]
                  transition-all
                  duration-500
                  ${
                    item.dark
                      ? "bg-[#03152D] text-white"
                      : "bg-[#F5F7FF]"
                  }
                `}
              >

                {/* Top */}

                <div className="flex items-center gap-4 mb-10">

                  <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-xs tracking-wider">
                    {item.name}
                  </span>

                  <span
                    className={`text-xs tracking-[3px] ${
                      item.dark
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    • {item.category}
                  </span>

                </div>

                {/* Title */}

                <h3
                  className={`text-5xl font-bold leading-tight mb-8 ${
                    item.dark
                      ? "text-white"
                      : "text-[#07162D]"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Light Card */}

                {!item.dark && (
                  <>
                    <p className="text-gray-600 mb-8 text-lg">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-3">

                      {item.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="bg-white px-4 py-2 rounded-full border text-sm"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>
                  </>
                )}

                {/* Dark Card */}

                {item.dark && (
                  <>
                    <p className="text-gray-400 text-lg mb-10">
                      {item.description}
                    </p>

                    <button className="border-b border-cyan-400 text-cyan-400 pb-1 hover:text-white transition">
                      View Case Study
                    </button>
                  </>
                )}

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Products;