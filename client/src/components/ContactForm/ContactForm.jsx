'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // POST request to send data to the backend API
      await axios.post('/api/contactForm', { name, email, message });
      toast.success('Your message was sent and saved successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast.error('Failed to send and save your message. Please try again.');
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
      <div className="relative max-w-5xl mx-4 md:mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl text-center mb-8 font-bold text-gray-800">Contact Us</h2>
        <form className="flex flex-col gap-6 mb-12" onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
          <input
            id="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm"
          />
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm"
          />
          <label htmlFor="description" className="block text-sm font-bold text-gray-700">Description</label>
          <textarea
            id="description"
            placeholder="Description"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 sm:text-sm"
            rows="4"
          />
          <button
            type="submit"
            className="p-4 text-lg font-semibold text-white bg-red-500 hover:bg-red-600 transition-colors shadow-lg rounded-lg"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col md:flex-row justify-around items-center gap-8 text-gray-800 mt-12">
          <div className="flex items-center gap-4 text-center md:text-left">
            <FaPhoneAlt className="text-green-600 text-3xl" />
            <span className="text-xl font-medium">+91-9340085920</span>
          </div>
          <div className="flex items-center gap-4 text-center md:text-left">
            <FaEnvelope className="text-red-600 text-3xl" />
            <span className="text-xl font-medium">confly@dynamics.com</span>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactForm;
