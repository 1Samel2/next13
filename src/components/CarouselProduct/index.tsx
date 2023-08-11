"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
const slides = [
  {
    url: "https://images.petz.com.br/fotos/1660159872400.jpg",
  },
  {
    url: "https://images.petz.com.br/fotos/1660164326787.jpg",
  },
  {
    url: "https://images.petz.com.br/fotos/1660162896325.jpg",
  },
  {
    url: "https://images.petz.com.br/fotos/1666728116870.jpg",
  },
  { url: "https://images.petz.com.br/fotos/1656078772148.jpg" },
];

export function CarouselProduct() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={2}
        navigation={true}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              <img src={slide.url} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
