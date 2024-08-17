'use client';

import React from 'react';
import Image from "next/image";
import CheckoutPage from './CheckoutPage';
import convertToSubcurrency from './../../lib/convertToSubcurrency.ts'; // Ensure the import path is correct
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const amount = 49.99;
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

    if (!process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY) {
        throw new Error('NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined');
    }

    return (
        <main className="min-h-screen flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 z-0">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/682/1001/desktop-wallpaper-10-amazing-nature-footage-by-drones-drones.jpg"
            fill
            alt="Background"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="z-10 p-4 sm:p-8 bg-white rounded-xl shadow-lg text-black text-center max-w-4xl w-full mx-4">
            <div className="mb-10">
                <h1 className="text-4xl font-extrabold mb-2">Monthly Subscription</h1>
                <h2 className="text-2xl"></h2>
                <span className="font-bold">${amount}</span>
            </div>
            <Elements
                stripe={stripePromise}
                options={{
                    mode: "payment",
                    amount: convertToSubcurrency(amount),
                    currency: "usd",
                }}
            >
                <CheckoutPage amount={amount} />
            </Elements>
            </div>
        </main>
    );
};

export default Payment;
