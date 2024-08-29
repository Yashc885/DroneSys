'use client';
import React from 'react';
import Slider from 'react-slick';
import Customer from './Customer';

const CustomerList = ({ customers }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300, // Faster speed
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000, // Auto move every 2 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <div className="w-9/12 border-t border-gray-300"></div>
      </div>
      <div className="slider-container p-6 md:p-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-red-500 mb-2">Testimonial</h2>
          <h3 className="text-4xl font-extrabold text-gray-800">What People Say</h3>
        </div>

        <Slider {...settings} className="mb-12">
          {customers.map((customer, index) => (
            <Customer 
              key={index}
              name={customer.name}
              imageSrc={customer.imageSrc}
              description={customer.description}
            />
          ))}
        </Slider>

        <div className="flex justify-center">
           <div  className="py-4"></div>
        </div>
      </div>
    </>
  );
}

export default CustomerList;
