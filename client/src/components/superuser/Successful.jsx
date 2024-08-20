
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; 
import './style.css'

const Successful = () => {
  return (
    <div className="mt-16 flex justify-around flex-wrap">
      <div className="relative mt-6 bg-white text-green-500 text-center text-2xl font-sans w-80 h-24 pt-10 border border-yellow-200 rounded-sm shadow-md">
        <div className="absolute inset-5 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-4 border-gray-500 animate-reveal">
            <FaCheckCircle className="w-full h-full text-green-500 text-5xl" />
          </div>
        </div>
        <div className="relative opacity-0 animate-reveal-message py-24 text-extrabold  delay-1500 duration-1000">
          Success!
        </div>
      </div>
    </div>
  );
};

export default Successful;
