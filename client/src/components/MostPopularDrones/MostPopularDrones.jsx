'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DroneCard = ({ image, name, price }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image src={image} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-lg text-blue-500">₹{price.toLocaleString()}</p>
      </div>
    </div>
  );
};

const MostPopularDrones = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const droneData = [
    {
      id: 1,
      image: "https://www.dji.com/assets/img/drones/mavic-air-2.jpg",
      name: "DJI Mavic Air 2",
      price: 79999,
    },
    {
      id: 2,
      image: "https://www.dji.com/assets/img/drones/mini-3-pro.jpg",
      name: "DJI Mini 3 Pro",
      price: 49999,
    },
    {
      id: 3,
      image: "https://www.dji.com/assets/img/drones/air-2s.jpg",
      name: "DJI Air 2S",
      price: 99999,
    },
    {
      id: 4,
      image: "https://autelrobotics.com/wp-content/uploads/2022/05/EVO-Nano-Plus.jpg",
      name: "Autel Robotics EVO Nano+",
      price: 39999,
    },
    {
      id: 5,
      image: "https://www.parrot.com/images/anafi-usa.jpg",
      name: "Parrot Anafi USA",
      price: 49999,
    },
  ];
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <button className="slick-arrow slick-next bg-blue-500 text-white">Next</button>,
    prevArrow: <button className="slick-arrow slick-prev bg-blue-500 text-white">Previous</button>,
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
    <div className="p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Most Popular Drones</h2>
        <Link href="/listview">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
            Explore
          </div>
        </Link>
      </div>
      <Slider ref={setSliderRef} {...settings} className="space-y-6">
        {droneData.map((drone) => (
          <DroneCard key={drone.id} {...drone} />
        ))}
      </Slider>
    </div>
  );
};

export default MostPopularDrones;
