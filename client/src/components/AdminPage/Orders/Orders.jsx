'use client';
import React, { useEffect, useState } from 'react';

const Orders = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

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

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            {loading && <p className="text-center text-gray-600 text-lg">Loading bookings...</p>}
            {error && <p className="text-center text-red-600 text-lg">{error}</p>}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                    <div key={booking._id} className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <h3 className="text-2xl font-semibold text-center mb-4">{booking.name}</h3>
                        <div className="text-gray-700 mb-4">
                            <p><strong>From:</strong> {new Date(booking.booking_info.start_date).toLocaleDateString()}</p>
                            <p><strong>To:</strong> {new Date(booking.booking_info.end_date).toLocaleDateString()}</p>
                            <p><strong>Price:</strong> ${booking.price.toFixed(2)}</p>
                            <p><strong>City:</strong> {booking.address.city}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => handleStatusChange(booking._id, 'Confirmed')}
                                className="px-5 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-colors"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleStatusChange(booking._id, 'Cancelled')}
                                className="px-5 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-colors"
                            >
                                Decline
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;
