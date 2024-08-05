import React from "react";
import { ShoppingCart } from 'react-feather';

const ImageDescription = () => {
    const specs = {
        description: "A high-performance drone",
        weight: "1.7kg",
        max_ascent_speed: "5m/s",
        max_descent_speed: "4m/s",
        max_forward_speed: "20m/s",
        max_ceiling: "3000m",
        max_flight_time: "60min",
        max_weight_carry: "2kg",
        memory_storage: "32GB",
    };

    return (
        <div className="w-full max-w-md mx-auto p-4">
            <h4 className="text-red-500 font-bold text-xs uppercase mb-2">Drone company</h4>
            <h3 className="text-4xl font-extrabold mb-2">Fall Limited Edition Drones</h3>
            <p className="text-gray-600 mb-2 leading-relaxed">
                These low-profile Drones are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer
            </p>

            <div className="bg-gray-100  py-2 p-4 rounded-lg shadow-xl">
                <h4 className="text-lg font-bold mb-2">Drone Specifications</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {Object.entries(specs).map(([key, value]) => (
                        <li key={key}>
                            <span className="font-semibold capitalize">{key.replace(/_/g, ' ')}:</span> {value}
                        </li>
                    ))}
                </ul>
            </div>
            <div className = "py-2 md:py-4"></div>
            
            <div className="flex items-center mb-2">
                <span className="font-bold text-xl mr-4">$125.00</span>
                <span className="text-red-500 bg-red-200 px-2 py-1 text-xs font-bold rounded">50%</span>
            </div>
            <p className="line-through text-gray-400 mb-4">$250.00</p>
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
