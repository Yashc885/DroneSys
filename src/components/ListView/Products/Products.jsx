import Image from 'next/image';
import React from 'react';

const Products = ({ result }) => {
  return (
    <section className="flex flex-wrap justify-center mt-8 px-4">
      {result.map((product, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-4 m-4 cursor-pointer hover:shadow-xl transition-shadow duration-300 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
        >
          <div className="relative w-full h-48 mb-4">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
          <div className="flex items-center mb-2">
            <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
            <span className="text-sm text-gray-600 ml-2">{product.reviews}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-800">${product.price}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1 9h12l-1-9M5.4 5L7 3h10l1.6 2M10 21h4"
              />
            </svg>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
