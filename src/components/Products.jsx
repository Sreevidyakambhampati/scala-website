import { useRef } from "react";
import { products } from "../data/productsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import "swiper/css";

function Products() {
  const swiperRef = useRef(null);

  return (
    <section id="products" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="mb-16">
          <h2 className="text-5xl font-bold text-[#07162D] mb-6">
            THE FUTURE WE'RE BUILDING
          </h2>

          <p className="text-gray-600 text-lg max-w-3xl">
            Our vision extends beyond technology, with businesses spanning
            education and membership-driven platforms.
          </p>
        </div>

        {/* Swiper */}

        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          speed={800}
          grabCursor
          simulateTouch
          allowTouchMove
          resistanceRatio={0.85}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;

            //FOR NAVBAR
            window.productsSwiper = swiper;
          }}
        >
          {products.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className={`
                relative
                overflow-hidden
                rounded-[34px]
                h-[430px]
                p-12
                text-white
                cursor-grab
                active:cursor-grabbing

                ${
                  item.name === "SPACZ"
                    ? "bg-gradient-to-br from-[#03152D] via-[#0A2D63] to-[#1F5EFF]"
                    : item.name === "STRIKE"
                    ? "bg-gradient-to-br from-[#481111] via-[#C14A0D] to-[#FF8A00]"
                    : "bg-gradient-to-br from-[#0F172A] via-[#284B63] to-[#4FD1C5]"
                }
              `}
              >
                {/* Glow */}

                <div
                  className={`
                  absolute
                  -right-24
                  -top-24
                  w-80
                  h-80
                  rounded-full
                  blur-3xl
                  opacity-25

                  ${
                    item.name === "SPACZ"
                      ? "bg-blue-400"
                      : item.name === "STRIKE"
                      ? "bg-orange-300"
                      : "bg-cyan-300"
                  }
                `}
                />

                {/* Navigation */}

                <div className="absolute top-8 right-8 flex gap-3 z-20">
                  <button
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <FiChevronLeft size={20} />
                  </button>

                  <button
                    onClick={() => swiperRef.current?.slideNext()}
                    className="w-11 h-11 rounded-full bg-white/10 border border-white/20 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
                  >
                    <FiChevronRight size={20} />
                  </button>
                </div>

                {/* Content */}

                <div className="relative z-10 h-full flex flex-col">

                  {/* Top */}

                  <div className="flex items-center gap-4 mb-10">
                    <span className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-sm font-semibold">
                      {item.name}
                    </span>

                    <span className="uppercase tracking-[3px] text-sm text-white/70">
                      • {item.category}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="text-5xl font-bold leading-tight mb-6 max-w-3xl">
                    {item.title}
                  </h3>

           <p className="text-white/80 text-lg mb-8">
  {item.description}
</p>

{item.tags ? (
  <div className="flex flex-wrap gap-3 mt-auto">
    {item.tags.map((tag) => (
      <span
        key={tag}
        className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm"
      >
        {tag}
      </span>
    ))}
  </div>
) : (
  <button className="w-fit border-b border-cyan-300 text-cyan-200 pb-1 hover:text-white transition">
    {item.buttonText}
  </button>
)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Products;