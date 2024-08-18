'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Subscribe = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://e1.pxfuel.com/desktop-wallpaper/682/1001/desktop-wallpaper-10-amazing-nature-footage-by-drones-drones.jpg"
          fill
          alt="Background"
          className="object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Subscription Card Container */}
      <div className="relative z-10 max-w-4xl mx-auto p-8 bg-white shadow-xl rounded-lg">
        <div className="text-center mb-8">
          <p className="text-sm text-gray-500">Drone Service Subscription</p>
          <h3 className="text-2xl font-semibold text-gray-800">
            Choose Your Plan <span className="mx-2">•</span> Tailored for Your Needs
          </h3>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-8">

          {/* Basic Plan */}
          <div className="card p-6 bg-gray-200 shadow-md rounded-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <span className="block text-lg font-semibold text-gray-700">Basic</span>
              <h2 className="text-3xl font-bold text-red-500">$49.99</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Up to 10 flights/month
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> 2 drone models supported
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Basic analytics
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Email support
              </li>
            </ul>
            <div className="text-center mt-8">
              <Link href="/admin/subscription/basic">
                <div className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Subscribe
                </div>
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="card p-6 bg-gray-200 shadow-md rounded-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <span className="block text-lg font-semibold text-gray-700">Pro</span>
              <h2 className="text-3xl font-bold text-red-500">$99.99</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> All Basic features, plus:
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Support for 5 drone models
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Priority support
              </li>
            </ul>
            <div className="text-center mt-8">
              <Link href="/admin/subscription/pro">
                <div className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Subscribe
                </div>
              </Link>
            </div>
          </div>

          {/* Enterprise Plan */}
          <div className="card p-6 bg-gray-200 shadow-md rounded-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1">
            <div className="text-center mb-6">
              <span className="block text-lg font-semibold text-gray-700">Enterprise</span>
              <h2 className="text-3xl font-bold text-red-500">Contact Us</h2>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> All Pro features
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Unlimited flights
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> Dedicated account manager
              </li>
              <li className="flex items-center">
                <span className="mr-2 text-red-500">•</span> 24/7 premium support
              </li>
            </ul>
            <div className="text-center mt-8">
              <Link href="/admin/subscription">
                <div className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors">
                  Contact Us
                  </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
