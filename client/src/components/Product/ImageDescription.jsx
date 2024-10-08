import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { ShoppingCart } from 'react-feather';
import Link from 'next/link'; 
const ImageDescription = ({ drone = {} }) => {
    const {
        drone_services_id = 'N/A',
        title = 'No Title',
        star = 0,
        reviews = 0,
        description = { description: 'No description', weight: 'N/A', max_ascent_speed: 'N/A', max_descent_speed: 'N/A', max_forward_speed: 'N/A', max_ceiling: 'N/A', max_weight_carry: 'N/A', memory_storage: 'N/A' },
        price_info = { hourly_price: '0', fullday_price: '0' },
        available = false 
    } = drone;
    
    const productNameSlug = drone_services_id.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg shadow-lg">
            <h4 className="text-red-500 font-bold text-xs uppercase mb-2">{drone_services_id}</h4>
            <h3 className="text-4xl font-extrabold mb-2">{title}</h3>
            <div className="flex items-center mb-2">
                <AiFillStar color="gold" /> <span className="ml-2 text-gray-600">{reviews}</span>
            </div>
            <p className="text-gray-600 mb-2 leading-relaxed">{description.description}</p>

            <div className="bg-gray-100 py-2 p-4 rounded-lg shadow-xl">
                <h4 className="text-lg font-bold mb-2">Drone Specifications</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><span className="font-semibold">Weight:</span> {description.weight}</li>
                    <li><span className="font-semibold">Max Ascent Speed:</span> {description.max_ascent_speed}</li>
                    <li><span className="font-semibold">Max Descent Speed:</span> {description.max_descent_speed}</li>
                    <li><span className="font-semibold">Max Forward Speed:</span> {description.max_forward_speed}</li>
                    <li><span className="font-semibold">Max Ceiling:</span> {description.max_ceiling}</li>
                    <li><span className="font-semibold">Max Weight Carry:</span> {description.max_weight_carry}</li>
                    <li><span className="font-semibold">Memory:</span> {description.memory_storage} GB</li>
                </ul>
            </div>
            <div className="py-2 md:py-4"></div>

            <div className="flex items-center mb-2">
                <span className="font-bold text-xl mr-4">${price_info.hourly_price}</span>
                <span className="text-red-500 bg-red-200 px-2 py-1 text-xs font-bold rounded">50%</span>
            </div>
            <p className="line-through text-gray-400 mb-4">{price_info.fullday_price}</p>

            {/* <div className="flex items-center mb-4">
                <Link href={`/booking/${productNameSlug}`}>
                    <div className={`flex items-center py-2 px-4 rounded ${available ? 'bg-red-600 text-white hover:shadow-lg' : 'bg-gray-300 text-gray-700 cursor-not-allowed'}`} aria-label="Book Now">
                        <ShoppingCart size={12} color="white" /> &nbsp; {available ? 'Book Now' : 'Unavailable'}
                    </div>
                </Link>
            </div> */}
        </div>
    );
};

export default ImageDescription;
