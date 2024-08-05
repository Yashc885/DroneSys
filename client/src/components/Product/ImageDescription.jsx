import React from 'react';
import Image from 'next/image';
import { AiFillStar } from 'react-icons/ai';
import { ShoppingCart } from 'react-feather';

const ImageDescription = ({ drone = {} }) => {
    const {
        img = "",
        title = "Default Title",
        star = <AiFillStar className="rating-star" />,
        reviews = "(0 reviews)",
        prevPrice = "$0.00",
        newPrice = "0",
        time = "0 min",
        memory = "0 GB",
        category = "default",
        move = "/default",
        description = "No description available",
        weight = "0 g",
        max_weight_carry = "0 g",
        max_ascent_speed = "0 m/s",
        max_descent_speed = "0 m/s",
        max_forward_speed = "0 m/s",
        max_ceiling = "0 m"
    } = drone;

    return (
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <h4 className="text-red-500 font-bold text-xs uppercase mb-2">{category}</h4>
            <h3 className="text-4xl font-extrabold mb-2">{title}</h3>
            <div className="flex items-center mb-2">
                {star} <span className="ml-2 text-gray-600">{reviews}</span>
            </div>
            <p className="text-gray-600 mb-2 leading-relaxed">{description}</p>

            <div className="bg-gray-100 py-2 p-4 rounded-lg shadow-xl">
                <h4 className="text-lg font-bold mb-2">Drone Specifications</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><span className="font-semibold">Weight:</span> {weight}</li>
                    <li><span className="font-semibold">Max Ascent Speed:</span> {max_ascent_speed}</li>
                    <li><span className="font-semibold">Max Descent Speed:</span> {max_descent_speed}</li>
                    <li><span className="font-semibold">Max Forward Speed:</span> {max_forward_speed}</li>
                    <li><span className="font-semibold">Max Ceiling:</span> {max_ceiling}</li>
                    <li><span className="font-semibold">Max Weight Carry:</span> {max_weight_carry}</li>
                    <li><span className="font-semibold">Memory:</span> {memory} GB</li>
                </ul>
            </div>
            <div className="py-2 md:py-4"></div>

            <div className="flex items-center mb-2">
                <span className="font-bold text-xl mr-4">${newPrice}</span>
                <span className="text-red-500 bg-red-200 px-2 py-1 text-xs font-bold rounded">50%</span>
            </div>
            <p className="line-through text-gray-400 mb-4">{prevPrice}</p>
            <div className="flex items-center mb-4">
                <div className="flex bg-gray-200 rounded p-1 w-1/2 justify-around mr-4">
                    <span className="text-red-500 font-bold">-</span>
                    <span className="font-bold">0</span>
                    <span className="text-red-500 font-bold">+</span>
                </div>
                <button className="flex items-center bg-red-600 text-white py-2 px-4 rounded hover:shadow-lg">
                    <ShoppingCart size={12} color="white" /> &nbsp; Add to cart
                </button>
            </div>
        </div>
    );
}

export default ImageDescription;
