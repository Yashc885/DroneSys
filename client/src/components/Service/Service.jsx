'use client';
import React from 'react';
import Image from 'next/image'; 
import { useEffect, useState } from 'react';

const servicesData = [
  {
    title: 'Service 1',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s',
  },
  {
    title: 'Service 2',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s',
  },
  {
    title: 'Service 3',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s',
  },
  {
    title: 'Service 4',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDZT0qh99IVOiZ1NdoCsrP4_mSQzuAFRBVzw&s',
  },
];

const Service = () => {
  const [loadedImages, setLoadedImages] = useState(new Set());

  useEffect(() => {
    servicesData.forEach(service => {
      const img = new window.Image();
      img.src = service.imgUrl;
      img.onload = () => setLoadedImages(prev => new Set([...prev, service.imgUrl]));
    });
  }, []);

  return (
    <div className="font-serif  py-8 overflow-x-hidden">
        <div className="text-center">
          <h2 className="text-2xl font-semibold  text-red-500">Service</h2>
          <h3 className="text-4xl font-extrabold mb-6">What We Offer </h3>
        </div>
      <div className="w-full max-w-7xl mx-auto p-8">
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <li key={index} className="relative list-none group">
              <div className="relative overflow-hidden rounded-2xl h-64">
                <Image
                  src={service.imgUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className={`transform transition-transform duration-500 group-hover:scale-110 group-hover:z-20 group-hover:shadow-2xl ${
                    loadedImages.has(service.imgUrl) ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
              <a
                href="#"
                className="block mt-4 text-center text-lg sm:text-xl md:text-2xl underline"
              >
                {service.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
