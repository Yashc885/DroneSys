'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from 'react-icons/fa';
import Explore from './../../assets/explore.png';
import './style.css';

const DroneCard = ({ image, name, price }) => {
    return (
      <div className="drone-card">
        <div className="relative w-full h-3/5">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        <div className="pl-2">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
          <p className="text-lg font-bold text-black">₹{price.toLocaleString()}</p>
        </div>
      </div>
    );
  };
  
  

const MostPopularDrones = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const droneData = [
    {
      id: 1,
      image: Explore,
      name: "DJI_Phantom",
      price: 3999,
    },
    {
      id: 2,
      image: Explore,
      name: "Dji_Promises6",
      price: 6999,
    },
    {
      id: 3,
      image: Explore,
      name: "DJI_Mavic Pro",
      price: 12999,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: (
      <button className="slick-arrow slick-next bg-white text-black border border-gray-300 rounded-full shadow-lg p-2">
        <FaArrowRight />
      </button>
    ),
    prevArrow: (
      <button className="slick-arrow slick-prev bg-white text-black border border-gray-300 rounded-full shadow-lg p-2">
        <FaArrowRight className="transform rotate-180" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
    {/* <div className="flex justify-center mb-8">
        <div className="w-9/12 border-t border-gray-300"></div>
    </div> */}
    <div
      className="p-6 parallax"
      style={{
        backgroundImage: 'url(https://w0.peakpx.com/wallpaper/552/378/HD-wallpaper-flying-black-drone.jpg)',
      }}
    >
      <div className="md:flex justify-between items-center mb-6">
        <div className="md:w-[25%] mb-6 md:mb-0">
          <h2 className="text2xl md:text-3xl lg:text-4xl font-bold text-white">Most Popular Drones</h2>
          <div className="py-2">
            <p className="text-lg text-gray-300 mb-4">Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit.</p>
          </div>
          <div>
            <Link href="/listview">
              <div className="inline-block bg-red-500 text-white px-6 py-2 rounded-full shadow-xl hover:bg-red-600 transition duration-300 items-center text-center">
                Explore
              </div>
            </Link>
          </div>
        </div>
        <div className="md:w-[75%]">
          <Slider ref={setSliderRef} {...settings} className="space-y-8">
            {droneData.map((drone) => (
              <DroneCard key={drone.id} {...drone} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
    </>
  );
};

export default MostPopularDrones;
