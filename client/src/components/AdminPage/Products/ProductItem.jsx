"use client";
import React from "react";
import Image from "next/image";

const ProductItem = ({ drone, handleSelectDrone, handleDelete }) => {
  return (
    <div key={drone._id} className="p-4 border rounded-lg shadow">
      <h2 className="text-xl font-semibold">{drone.title}</h2>
      <p><strong>Description:</strong> {drone.description.description}</p>
      <p><strong>Weight:</strong> {drone.description.weight}</p>
      {/* More fields... */}
      {drone.images && drone.images.length > 0 && (
        <div className="mt-2">
          <h3 className="text-lg font-semibold">Images</h3>
          <div className="flex space-x-2 mt-2">
            {drone.images.map((image, index) => (
              <Image 
                key={index} 
                src={image.path}
                alt={`Drone ${index}`}
                className="w-24 h-24 object-cover border rounded-md"
                width={100}
                height={100}
              />
            ))}
          </div>
        </div>
      )}
      <button onClick={() => handleSelectDrone(drone)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
      <button onClick={() => handleDelete(drone._id)} className="ml-2 mt-2 bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  );
};

export default ProductItem;
