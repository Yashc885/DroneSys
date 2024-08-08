'use client';
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';

const Booking = ({ drone }) => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState({
        address1: '',
        address2: '',
        city: '',
        state: '',
        country: '',
        pin: ''
    });
    const [errors, setErrors] = useState({});

    const pricePerDay = drone.newPrice ? parseFloat(drone.newPrice.replace('$', '')) : 100;

    // Prepare the images data for ImageSlider
    const images = [
        {
            original: drone.img,
            thumbnail: drone.img,
            originalWidth: 9000,
            originalHeight: 500,
            thumbnailWidth: 250,
            thumbnailHeight: 150,
        },
        {
            original: 'https://img.freepik.com/free-photo/drone-flying-over-mountains_58409-219.jpg', // Add more images
            thumbnail: 'https://img.freepik.com/free-photo/drone-flying-over-mountains_58409-219.jpg',
            originalWidth: 1000,
            originalHeight: 600,
            thumbnailWidth: 250,
            thumbnailHeight: 150,
        }
    ];

    const calculateTotal = () => {
        if (startDate && endDate) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const numberOfDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
            return numberOfDays > 0 ? numberOfDays * pricePerDay : 0;
        }
        return 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = {};
        
        // Validate required fields
        if (!name) formErrors.name = 'Please enter your name.';
        if (!email) formErrors.email = 'Please enter your email.';
        if (!phone) formErrors.phone = 'Please enter your phone number.';
        if (!startDate) formErrors.startDate = 'Please select a start date.';
        if (!endDate) formErrors.endDate = 'Please select an end date.';
        if (!address.address1) formErrors.address1 = 'Please enter address line 1.';
        if (!address.city) formErrors.city = 'Please enter your city.';
        if (!address.state) formErrors.state = 'Please enter your state.';
        if (!address.country) formErrors.country = 'Please enter your country.';
        if (!address.pin) formErrors.pin = 'Please enter your PIN code.';
    
        // Validate email and phone number format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;
    
        if (email && !emailRegex.test(email)) {
            formErrors.email = 'Please enter a valid email address.';
        }
    
        if (phone && !phoneRegex.test(phone)) {
            formErrors.phone = 'Please enter a valid 10-digit phone number.';
        }
    
        // Validate date range
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
    
        // Prepare booking data
        const bookingData = {
            user_id: 'some_user_id', // Replace with actual user ID
            drone_services_info_id: drone._id,
            address,
            is_fullday: false, // Adjust if needed
            booking_info: {
                start_date: startDate,
                end_date: endDate
            },
            price: calculateTotal(),
            name,
            email,
            phone_number: phone,
            status: 'Pending'
        };
    
        try {
            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(bookingData)
            });
    
            const result = await response.json();
            if (response.ok) {
                alert('Booking confirmed successfully!');
                // Clear form fields
                setName('');
                setEmail('');
                setPhone('');
                setStartDate('');
                setEndDate('');
                setAddress({
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    country: '',
                    pin: ''
                });
                setErrors({});
            } else {
                throw new Error(result.error || 'Error making booking');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="md:flex flex-wrap">
            <div className="w-full p-2 md:py-8 md:w-1/2 py-2">
                <ImageSlider images={images} className="" />
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
                                Address Line 1:
                                <input
                                    type="text"
                                    name="address1"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={address.address1}
                                    onChange={(e) => setAddress({ ...address, address1: e.target.value })}
                                />
                                {errors.address1 && <p className="text-red-500 text-sm">{errors.address1}</p>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Address Line 2:
                                <input
                                    type="text"
                                    name="address2"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={address.address2}
                                    onChange={(e) => setAddress({ ...address, address2: e.target.value })}
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                City:
                                <input
                                    type="text"
                                    name="city"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={address.city}
                                    onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                />
                                {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                State:
                                <input
                                    type="text"
                                    name="state"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={address.state}
                                    onChange={(e) => setAddress({ ...address, state: e.target.value })}
                                />
                                {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Country:
                                <input
                                    type="text"
                                    name="country"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={address.country}
                                    onChange={(e) => setAddress({ ...address, country: e.target.value })}
                                />
                                {errors.country && <p className="text-red-500 text-sm">{errors.country}</p>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                PIN Code:
                                <input
                                    type="text"
                                    name="pin"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={address.pin}
                                    onChange={(e) => setAddress({ ...address, pin: e.target.value })}
                                />
                                {errors.pin && <p className="text-red-500 text-sm">{errors.pin}</p>}
                            </label>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">
                                Start Date:
                                <input
                                    type="date"
                                    name="startDate"
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
                                    name="endDate"
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                />
                                {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-xl">Total: ${calculateTotal()}</span>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Booking;
