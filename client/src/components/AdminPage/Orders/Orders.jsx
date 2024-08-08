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
        <div className="p-4 md:p-8">
            {loading && <p className="text-center text-gray-500">Loading bookings...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                    <div key={booking._id} className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-2">{booking.name}</h3>
                        <p><strong>Start Date:</strong> {new Date(booking.booking_info.start_date).toLocaleDateString()}</p>
                        <p><strong>End Date:</strong> {new Date(booking.booking_info.end_date).toLocaleDateString()}</p>
                        <p><strong>Price:</strong> ${booking.price.toFixed(2)}</p>
                        <p><strong>City:</strong> {booking.address.city}</p>
                        <div className="mt-4 flex justify-between">
                            <button
                                onClick={() => handleStatusChange(booking._id, 'Confirmed')}
                                className="px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
                            >
                                Accept
                            </button>
                            <button
                                onClick={() => handleStatusChange(booking._id, 'Cancelled')}
                                className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
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
