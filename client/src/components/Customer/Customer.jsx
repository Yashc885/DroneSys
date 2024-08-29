import React from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Customer = ({ name, imageSrc, description }) => {
  return (
    <div className="relative flex flex-col items-center bg-white p-6 shadow-lg max-w-md mx-auto rounded-md mb-6 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gray-100">
      <div className="relative w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-red-500">
        <Image
          className="object-cover"
          src={imageSrc}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h2 className="text-xl font-semibold mb-1 text-center text-gray-800">{name}</h2>
      <div className="flex mb-2">
        {/* Display the star rating */}
        {[...Array(4)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        <FaStarHalfAlt className="text-yellow-500" />
      </div>
      <p className="text-gray-600 text-center">{description}</p>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-red-200 to-transparent opacity-0 hover:opacity-50 transition-opacity duration-300"></div> */}
    </div>
  );
}

export default Customer;
