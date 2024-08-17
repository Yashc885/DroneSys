'use client'
import React from 'react';

const PaymentConfirmation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 md:p-16 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
        <div className="flex items-center justify-center h-48 w-48 bg-green-100 rounded-full mx-auto">
          <svg
            className="w-24 h-24 text-green-500 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-green-600 mt-8">Success</h1>
        <p className="text-gray-700 text-lg md:text-xl mt-4">
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
