'use client';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';
import Sidebar from './Sidebar';

const Orders = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('/api/booking');
                if (!response.ok) {
                    throw new Error('Failed to fetch bookings');
                }
                const data = await response.json();
                setBookings(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    const handleStatusChange = async (id, status) => {
        try {
            const response = await fetch(`/api/booking?id=${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status }),
            });
            if (!response.ok) {
                throw new Error('Failed to update booking status');
            }
            const updatedBooking = await response.json();
            setBookings((prevBookings) =>
                prevBookings.map((booking) =>
                    booking._id === updatedBooking._id ? updatedBooking : booking
                )
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const filteredBookings = bookings.filter(booking => {
        if (filter === 'all') return true;
        if (filter === 'new') return booking.status === 'Pending';
        if (filter === 'past') return booking.status === 'Confirmed' || booking.status === 'Cancelled';
        return true;
    });

    return (
        <div className="bg-gray-200 min-h-screen flex flex-col md:flex-row">
            <div className="hidden md:block w-1/4 bg-white shadow-lg p-6 md:p-8">
                <Sidebar onFilterChange={setFilter} />
            </div>
            <div className="w-full md:w-3/4 flex flex-col items-center">
                <div className="w-full md:w-11/12 lg:w-10/12 xl:w-8/12">
                    <div className="space-y-6 p-4 rounded-lg">
                        {loading && (
                            <p className="text-center text-gray-600 text-lg">Loading bookings...</p>
                        )}
                        {error && (
                            <p className="text-center text-red-600 text-lg">{error}</p>
                        )}
                        {filteredBookings.map((booking) => (
                            <div
                                key={booking._id}
                                className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 hover:shadow-xl transition-transform transform hover:scale-105"
                            >
                                <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
                                    <div className="mb-4 md:mb-0 md:w-[70%]">
                                        <h3 className="text-2xl font-semibold mb-2">{booking.name}</h3>
                                        <div className="text-gray-700">
                                            <p className="flex items-center">
                                                <FaCalendarAlt className="mr-2 text-blue-500" />
                                                <strong>From:</strong> {new Date(booking.booking_info.start_date).toLocaleDateString()}
                                            </p>
                                            <p className="flex items-center">
                                                <FaCalendarAlt className="mr-2 text-blue-500" />
                                                <strong>To:</strong> {new Date(booking.booking_info.end_date).toLocaleDateString()}
                                            </p>
                                            <p className="flex items-center">
                                                <FaDollarSign className="mr-2 text-green-500" />
                                                <strong>Price:</strong> ${booking.price.toFixed(2)}
                                            </p>
                                            <p className="flex ">
                                                <FaMapMarkerAlt className="mr-2 text-red-500" />
                                                <strong>Location:</strong> {booking.address.address1}, {booking.address.address2}, {booking.address.city}, {booking.address.state}, {booking.address.country} - {booking.address.pin}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="md:w-[30%] flex items-center justify-between md:justify-end">
                                        <div className="flex flex-col items-center">
                                            <h4 className="text-lg text-gray-600 font-bold">
                                                <span className="flex items-center">
                                                    <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                                                    <span className="text-indigo-600 ml-1">{booking.drone_services_info_id}</span>
                                                </span>                                                
                                            </h4>
                                            <div className="mt-4 flex flex-col space-y-2 w-full">
                                                <button
                                                    onClick={() => handleStatusChange(booking._id, 'Confirmed')}
                                                    className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-all duration-200 transform hover:scale-105"
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={() => handleStatusChange(booking._id, 'Cancelled')}
                                                    className="px-6 py-2 bg-red-500 text-white font-semibold rounded-full shadow-md hover:bg-red-600 transition-all duration-200 transform hover:scale-105"
                                                >
                                                    Decline
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center items-center text-sm text-gray-500">
                                    <p>Booking ID: {booking._id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;
