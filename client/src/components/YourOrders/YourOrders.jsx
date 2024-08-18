'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';

const YourOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Fetch orders from the API
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/booking');
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };
        
        fetchOrders();
    }, []);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center  mb-6">Your Orders</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {orders.length === 0 ? (
                    <p className="col-span-full text-center text-gray-500">No orders found</p>
                ) : (
                    orders.map((order) => (
                        <div key={order._id} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
                            <h2 className="text-xl font-semibold mb-2">{order.name}</h2>
                            <p className="text-gray-700 mb-2">Email: {order.email}</p>
                            <p className="text-gray-700 mb-2">Phone: {order.phone_number}</p>
                            <p className="text-gray-700 mb-2">Status: <span className={`font-bold ${order.status === 'Pending' ? 'text-yellow-500' : 'text-green-500'}`}>{order.status}</span></p>
                            <p className="text-gray-700 mb-2">Price: ${order.price}</p>
                            <p className="text-gray-700 mb-2">Start Date: {new Date(order.booking_info.start_date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-2">End Date: {new Date(order.booking_info.end_date).toLocaleDateString()}</p>
                            <p className="text-gray-700 mb-2">Address: {order.address.address1}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.pin}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default YourOrders;
