import React from 'react';
import Image from 'next/image';

const Customer = ({ name, imageSrc, projectCount, description }) => {
  return (
    <div className="flex flex-col flex-basis-full border border-black bg-white p-6">
      <div className="flex flex-col gap-4 mb-8">
        <Image 
          className="w-full h-32 object-cover object-center"
          src={imageSrc} 
          alt={name} 
          width={500} // Specify the width of the image
          height={128} // Specify the height of the image
        />
        <div className=" justify-between text-center items-center">
          <h1 className="font-extrabold text-lg">{name}</h1>
        </div>
        <p className="text-gray-500 justify-normal ">{description}</p>
      </div>
    </div>
  );
}

export default Customer;
