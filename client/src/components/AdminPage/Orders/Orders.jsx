'use client';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaUser, FaPhone, FaClipboardList } from 'react-icons/fa';
import axios from 'axios';
import Sidebar from './Sidebar';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const userId = localStorage.getItem('vendor_id'); 

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/booking');
                const userOrders = response.data.filter(order => order.user_id === userId);
                setOrders(userOrders);
                setFilteredOrders(userOrders); 
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [userId]);

    const handleFilterChange = (filter) => {
        switch (filter) {
            case 'all':
                setFilteredOrders(orders);
                break;
            case 'new':
                setFilteredOrders(orders.filter(order => order.status === 'Pending'));
                break;
            case 'past':
                setFilteredOrders(orders.filter(order => order.status === 'Confirmed' || order.status === 'Cancelled'));
                break;
                case 'upcoming':
                setFilteredOrders(orders.filter(order => order.status === 'Confirmed'));
                break;
            default:
                setFilteredOrders(orders);
        }
    };

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put('/api/booking', { orderId, status: newStatus });
            setOrders(orders.map(order => 
                order._id === orderId ? { ...order, status: newStatus } : order
            ));
            setFilteredOrders(filteredOrders.map(order =>
                order._id === orderId ? { ...order, status: newStatus } : order
            ));
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return (
        <div className="flex">
            <Sidebar onFilterChange={handleFilterChange} />
            <div className="flex-1 p-6 bg-gray-100">
                <div className="w-full max-w-4xl mx-auto">
                    {filteredOrders.length === 0 ? (
                        <p className="text-center text-gray-500">No orders found</p>
                    ) : (
                        filteredOrders.map((order) => (
                            <div key={order._id} className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 mb-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col md:flex-row">
                                    <div className="md:w-1/2 mb-4 md:mb-0">
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaClipboardList className="text-yellow-500 mr-3" />
                                            <span><span className="font-bold text-purple-600 text-xl md:text-2xl">Service: </span>{order.drone_services_info_id}</span>
                                        </div>
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaCalendarAlt className="text-yellow-500 mr-3" />
                                            <span><span className="font-bold">Start Date:</span> {new Date(order.booking_info.start_date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaCalendarAlt className="text-yellow-500 mr-3" />
                                            <span><span className="font-bold">End Date:</span> {new Date(order.booking_info.end_date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaDollarSign className="text-green-500 mr-3" />
                                            <span><span className="font-bold">Price:</span> ${order.price}</span>
                                        </div>
                                    </div>
                                    <div className="md:w-1/2">
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <span><span className="font-bold">Status:</span> 
                                                <span className={`font-bold ${order.status === 'Pending' ? 'text-yellow-500' : order.status === 'Confirmed' ? 'text-green-500' : 'text-red-500'}`}> {order.status}</span>
                                            </span>
                                        </div>                                    
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaUser className="text-blue-500 mr-3" />
                                            <span><span className="font-bold">Email:</span> {order.email}</span>
                                        </div>
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaPhone className="text-teal-500 mr-3" />
                                            <span><span className="font-bold">Phone:</span> {order.phone_number}</span>
                                        </div>
                                        <div className="flex items-center mb-3 text-gray-700">
                                            <FaMapMarkerAlt className="text-red-500 mr-3" />
                                            <span><span className="font-bold">Address:</span> {order.address.address1}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.pin}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-4 border-t border-gray-300"></div>
                                <div className="text-center text-gray-400 font-semibold text-sm">
                                    Booking ID: {order._id}
                                </div>
                                {order.status === 'Pending' && (
                                    <div className="flex justify-end mt-4 space-x-4">
                                        <button 
                                            onClick={() => handleStatusChange(order._id, 'Confirmed')}
                                            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                                        >
                                            Accept
                                        </button>
                                        <button 
                                            onClick={() => handleStatusChange(order._id, 'Cancelled')}
                                            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                        >
                                            Reject
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Orders;
