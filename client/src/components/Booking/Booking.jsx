'use client';
import React, { useState } from 'react';
import ImageSlider from "./imageSlider"

const Booking = () => {
  // State to store the form values
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const pricePerDay = 100;
  const chosenService = 'Agriculture Drone';
  const chosenDrone = 'ABC Drone';
  const calculateTotal = () => {
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const numberOfDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      if(numberOfDays > 0)
      return numberOfDays * pricePerDay;
      else
      return 0;
    }
    return 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
    if (!name) formErrors.name = 'Please enter your name.';
    if (!email) formErrors.email = 'Please enter your email.';
    if (!phone) formErrors.phone = 'Please enter your phone number.';
    if (!startDate) formErrors.startDate = 'Please select a start date.';
    if (!endDate) formErrors.endDate = 'Please select an end date.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (email && !emailRegex.test(email)) {
      formErrors.email = 'Please enter a valid email address.';
    }

    if (phone && !phoneRegex.test(phone)) {
      formErrors.phone = 'Please enter a valid 10-digit phone number.';
    }

    // Validate dates
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (end < start) {
        formErrors.endDate = 'End date must be on or after the start date.';
      }
    }

    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }
    alert('Form submitted successfully!');
    setName('');
    setEmail('');
    setPhone('');
    setStartDate('');
    setEndDate('');
    setErrors({});
  };

  return (
    <div className="md:flex flex-wrap">
      <div className="w-full md:w-1/2">
      <div className="py-12 md:py-12 lg:py-10 ">
        <ImageSlider />
        </div>
      </div>
      <div className="w-full md:w-1/2 py-4 md:py-8 mx-auto px-2">
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
          <div className="bg-red-500 p-2 text-center text-white font-extrabold rounded-xl shadow-lg">
            <h2 className="text-2xl">Booking Details</h2>
          </div>
          <form className="py-4 md:py-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Name:
                <input
                  type="text"
                  name="name"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Your Email:
                <input
                  type="email"
                  name="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Phone:
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Start Date:
                <input
                  type="date"
                  name="pickupDate"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
              </label>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                End Date:
                <input
                  type="date"
                  name="returnDate"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
              </label>
            </div>
            <div className="py-4">
              <div className="border-t border-gray-300 bg-gray-200 shadow-lg rounded-lg pt-4">
                <div className="px-2">
                  <div className="flex items-center justify-between py-2">
                    <h6 className="text-lg md:text-xl text-red-500 font-bold">Chosen Service:</h6>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{chosenService}</h4>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <h6 className="text-lg md:text-xl text-red-500 font-bold">Chosen Drone:</h6>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">{chosenDrone}</h4>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <h6 className="text-lg md:text-xl text-red-500 font-bold">Price Per Day:</h6>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">${pricePerDay}</h4>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <h6 className="text-lg md:text-xl text-red-500 font-bold">Total Cost:</h6>
                    <h4 className="text-lg md:text-xl font-bold text-gray-900">${calculateTotal()}</h4>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 px-4 rounded-xl shadow-lg hover:bg-red-600 focus:outline-none focus:ring-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
