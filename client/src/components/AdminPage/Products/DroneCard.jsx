// components/DroneCard.jsx
import React from 'react';
import Image from 'next/image';
import {
  FaWeightHanging,
  FaTachometerAlt,
  FaAngleDoubleUp,
  FaAngleDoubleDown,
  FaPlane,
  FaArrowsAltH,
  FaClock,
  FaDollarSign,
  FaMemory
} from 'react-icons/fa';

const DroneCard = ({ drone, onEdit, onDelete }) => {
  return (
    <div className="p-6 border rounded-lg shadow-lg bg-white text-black flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 transition-transform transform hover:scale-105">
      <div className="flex-shrink-0">
        <Image
          src={drone.images[0]?.path || '/default-drone.jpg'}
          alt="Drone Image"
          className="w-48 h-48 object-cover border-4 border-white rounded-lg shadow-md"
          width={200}
          height={200}
          loading="lazy"
        />
      </div>
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
            <div>
                <h2 className="text-2xl font-bold mb-2">{drone.title}</h2>
            </div>
            <div>
                <h2 className="text-2xl font-bold text-purple-500 mb-2">{drone.drone_services_id}</h2>
            </div>
        </div>
        <p className="flex items-center mb-2">
          <FaPlane className="mr-2 text-yellow-300" />
          {drone.description.description}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="flex items-center">
              <FaWeightHanging className="mr-2 text-red-300" />
              <strong className="mr-1">Weight:</strong> {drone.description.weight}
            </p>
            <p className="flex items-center">
              <FaAngleDoubleUp className="mr-2 text-purple-300" />
              <strong className="mr-1">Max Ascent Speed:</strong> {drone.description.max_ascent_speed}
            </p>
            <p className="flex items-center">
              <FaAngleDoubleDown className="mr-2 text-blue-300" />
              <strong className="mr-1">Max Descent Speed:</strong> {drone.description.max_descent_speed}
            </p>
            <p className="flex items-center">
              <FaTachometerAlt className="mr-2 text-yellow-300" />
              <strong className="mr-1">Max Forward Speed:</strong> {drone.description.max_forward_speed}
            </p>
            <p className="flex items-center">
              <FaArrowsAltH className="mr-2 text-green-300" />
              <strong className="mr-1">Max Ceiling:</strong> {drone.description.max_ceiling}
            </p>
          </div>
          <div>
            <p className="flex items-center">
              <FaClock className="mr-2 text-orange-300" />
              <strong className="mr-1">Max Flight Time:</strong> {drone.description.max_flight_time}
            </p>
            <p className="flex items-center">
              <FaWeightHanging className="mr-2 text-red-300" />
              <strong className="mr-1">Max Weight Carry:</strong> {drone.description.max_weight_carry}
            </p>
            <p className="flex items-center">
              <FaMemory className="mr-2 text-purple-300" />
              <strong className="mr-1">Memory Storage:</strong> {drone.description.memory_storage}
            </p>
            <p className="flex items-center">
              <FaDollarSign className="mr-2 text-green-300" />
              <strong className="mr-1">Hourly Price:</strong> ${drone.price_info.hourly_price}
            </p>
            <p className="flex items-center">
              <FaDollarSign className="mr-2 text-green-300" />
              <strong className="mr-1">Full Day Price:</strong> ${drone.price_info.fullday_price}
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button
            onClick={() => onEdit(drone)}
            className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg shadow-md transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={() => onDelete(drone._id)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DroneCard;
