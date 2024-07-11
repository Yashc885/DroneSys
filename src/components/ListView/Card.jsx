import React from "react";
import Image from "next/image";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="relative h-56">
        <Image
          src={img}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray-900 font-bold text-lg">{title}</h2>
        <div className="flex items-center mt-1">
          <svg
            className="w-4 h-4 fill-current text-yellow-500"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.3l1.4 3.6h4.5l-3.6 2.7 1.4 3.6-3-2.3-3 2.3 1.4-3.6-3.6-2.7h4.5z"></path>
          </svg>
          <span className="text-gray-700 ml-1">
            {star} ({reviews})
          </span>
        </div>
        <div className="mt-2">
          <span className="text-gray-700">{prevPrice}</span>
          <span className="ml-1 text-gray-600 line-through">{newPrice}</span>
        </div>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          View Details
        </button>
      </div>
    </div>
  );
}

export default Card;
