import React from 'react';

const Customer = ({ name, imageSrc, projectCount, description }) => {
  return (
    <>
    <div className="flex flex-col flex-basis-full  border border-black  bg-white p-6">
      <div className="flex flex-col  gap-4 mb-8">
        <img className="w-full h-32 object-cover object-center" src={imageSrc} alt={name} />
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-gray-600">{projectCount} Projects</p>
        </div>
        <p className="text-gray-500">{description}</p>
      </div>
      <a href="#" className="block py-4 px-6 text-center bg-transparent border border-black transition-colors duration-300 hover:bg-purple-500 hover:text-white">
        Follow {name}
      </a>
    </div>
    </>
  );
}

export default Customer;
