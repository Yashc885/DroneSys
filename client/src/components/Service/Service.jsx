'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';  // Import Link from next/link
import ag1 from '../../assets/serv/ag1.jpg';
import m1 from '../../assets/serv/m1.jpg';
import p1 from '../../assets/serv/p1.jpg';
import s1 from '../../assets/serv/s1.jpg';
import v1 from '../../assets/serv/v1.jpg';
import Slider from "./Slider.jsx";

const servicesData = [
  {
    title: 'Agriculture',
    imgUrl: ag1,
    url: '/services/agriculture',  // Add URL for each service
  },
  {
    title: 'Mining',
    imgUrl: m1,
    url: '/services/mining',
  },
  {
    title: 'Security',
    imgUrl: s1,
    url: '/services/security',
  },
  {
    title: 'VideoGraphy',
    imgUrl: v1,
    url: '/services/videography',
  },
  {
    title: 'PhotoGraphy',
    imgUrl: p1,
    url: '/services/photography',
  },
];

const Service = () => {
  return (
    <div className="font-serif overflow-x-hidden">
      <Slider />
      <div className="py-4 md:py-6 lg:py-8"></div>
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-red-500">Service</h2>
        <h3 className="text-4xl font-extrabold mb-6">What We Offer</h3>
      </div>
      <div className="w-full max-w-7xl mx-auto p-8">
        <ul className="grid gap-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5">
          {servicesData.map((service, index) => (
            <li key={index} className="relative list-none group">
              <Link href={service.url}> 
                  <div className="relative overflow-hidden rounded-2xl h-64">
                    <Image
                      src={service.imgUrl}
                      alt={service.title}
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transform transition-transform duration-500 group-hover:scale-110 group-hover:z-20 group-hover:shadow-2xl"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                      <h4 className="text-lg font-bold">{service.title}</h4>
                    </div>
                  </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
