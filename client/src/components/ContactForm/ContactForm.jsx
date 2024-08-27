'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  // State to manage form input values
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Post the form data to the API
      await axios.post('/api/contact', { name, email, message });

      // Show success notification
      toast.success('Your message was sent successfully!');
      
      // Clear the form fields
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      // Show error notification
      toast.error('Failed to send your message. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://e1.pxfuel.com/desktop-wallpaper/682/1001/desktop-wallpaper-10-amazing-nature-footage-by-drones-drones.jpg"
          fill
          alt="Background"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contact Form */}
      <div className="relative max-w-5xl mx-4 md:mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center mb-8 font-bold text-gray-800">Contact Us</h2>
        <form className="flex flex-col gap-6 mb-12" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Description"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-4 text-lg rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
          <button
            type="submit"
            className="p-4 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors shadow-md"
          >
            Submit
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-gray-800 mt-12">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-green-600 text-3xl" />
            <span className="text-xl font-medium">+1 234 567 890</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-red-600 text-3xl" />
            <span className="text-xl font-medium">contact@example.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-yellow-600 text-3xl" />
            <span className="text-xl font-medium">123 Street, City, Country</span>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
