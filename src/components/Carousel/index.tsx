"use client";
import * as C from './styles'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

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
];

export function Carousel() {
    return (
        <C.Container>
            <Swiper
                pagination={{
                    type: "progressbar",
                }}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="w-50">
                            <img src={slide.url} alt="" className=""  />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </C.Container>
    );
}
