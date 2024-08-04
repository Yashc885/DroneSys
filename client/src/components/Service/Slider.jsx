"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Button } from "./Button";
import { priceFormat } from "@/lib/utils";
import Link from "next/link";

const Slider = () => {
  return (
    <section className="relative">
      <Swiper
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }} 
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        loop={true}
        className="relative sm:h-[350px] h-[200px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative">
            <Link href={`/${slide.id}`}>
              <figure className="relative h-full">
                <Image
                  src={slide.img}
                  alt={slide.title}
                  fill
                  quality={100}
                  className="object-cover"
                />
              </figure>
              <div className="absolute left-12 top-1/2 -translate-y-1/2 md:max-w-sm max-w-xs">
                <h2 className="md:text-6xl text-4xl">{slide.title}</h2>
                <div className="flex items-center gap-2 py-4">
                  <span className="text-2xl">{priceFormat(slide.price)}</span>
                  {slide.discountPrice && (
                    <del className="text-gray-500 text-xl">
                      {priceFormat(slide.discountPrice)}
                    </del>
                  )}
                </div>
                <div>
                  <Button>Buy Now</Button>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;

const slides = [
  {
    id: "1",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932562/ecom/slider/realmebuds_wnxmdx.webp",
    title: "Agriculture Drone",
    price: 1799,
    discountPrice: 999,
    align: "left",
  },
  {
    id: "2",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932563/ecom/slider/1_Nord35G-desktop_mgdkzw.webp",
    title: "Mining Drone",
    price: 1799,
    discountPrice: 999,
    align: "left",
  },
  {
    id: "3",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932562/ecom/slider/realmebuds_wnxmdx.webp",
    title: "Security Drone",
    price: 1799,
    discountPrice: 999,
    align: "left",
  },
  {
    id: "4",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932563/ecom/slider/1_Nord35G-desktop_mgdkzw.webp",
    title: "Videography Drone",
    price: 1799,
    discountPrice: 999,
    align: "left",
  },
  {
    id: "5",
    img: "https://res.cloudinary.com/dayo1mpv0/image/upload/v1689932562/ecom/slider/realmebuds_wnxmdx.webp",
    title: "Photography Drone",
    price: 1799,
    discountPrice: 999,
    align: "left",
  },
];