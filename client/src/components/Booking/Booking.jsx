'use client';
import React, { useState } from 'react';
import ImageSlider from './ImageSlider';
import withAuthUser from './../withAuthUser.js';

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

    const pricePerDay = drone.newPrice ? parseFloat(drone.newPrice.replace('$', '')) : 150;
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
            original: 'https://img.freepik.com/free-photo/drone-flying-over-mountains_58409-219.jpg',
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

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (email && !emailRegex.test(email)) {
            formErrors.email = 'Please enter a valid email address.';
        }

        if (phone && !phoneRegex.test(phone)) {
            formErrors.phone = 'Please enter a valid 10-digit phone number.';
        }

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

        console.log( "GBP:" , drone.description.description , drone.title , drone.location , drone._id);

        const bookingData = {
            user_id: drone.user_id,
            drone_services_info_id: drone.drone_services_id,
            address: {
                address1: address.address1,
                address2: address.address2,
                city: address.city,
                state: address.state,
                country: address.country,
                pin: address.pin
            },
            is_fullday: false,
            booking_info: {
                start_date: startDate,
                end_date: endDate
            },
            price: Number(calculateTotal()),
            name: name,
            email: email,
            phone_number: phone,
            status: 'Pending',
            cancelled_reason: 'None',
            description: drone.description.description,  // Ensure description is being correctly passed            
            product_id: drone._id,  // Ensure that _id is being correctly passed
            title: drone.title,     // Ensure title is being correctly passed
            location: drone.location,  // Ensure location is being correctly passed
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
                <ImageSlider images={images} />
            </div>
            <div className="w-full md:w-1/2 py-4 md:py-8 mx-auto px-2">
                <div className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
                    <div className="bg-red-500 p-2 text-center text-white font-extrabold rounded-xl shadow-lg mb-4">
                        <h2 className="text-xl">Booking Details</h2>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                        </div>
                        <div className="mt-4">
                            <h3 className="text-gray-700 font-medium mb-2">Address</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-red-500 text-white font-bold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2"
                        >
                            Confirm Booking
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default withAuthUser(Booking);
