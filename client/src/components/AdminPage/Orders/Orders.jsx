'use client';
import React, { useEffect, useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign, FaUser, FaPhone, FaInfoCircle, FaFileInvoice, FaBook, FaMobileAlt } from 'react-icons/fa';
import { AiOutlineCheckCircle, AiOutlineCloseCircle, AiOutlineClockCircle } from 'react-icons/ai';
import { MdDescription } from 'react-icons/md';
import axios from 'axios';
import Sidebar from './Sidebar';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [counts, setCounts] = useState({
        all: 0,
        new: 0,
        past: 0,
        upcoming: 0,
    });
    const userId = localStorage.getItem('vendor_id');

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('/api/booking');
                const userOrders = response.data.filter(order => order.user_id === userId);
                setOrders(userOrders);
                setFilteredOrders(userOrders);
                calculateCounts(userOrders); // Calculate counts based on fetched orders
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, [userId]);

    const calculateCounts = (orders) => {
        const all = orders.length;
        const newOrders = orders.filter(order => order.status === 'Pending').length;
        const pastOrders = orders.filter(order => order.status === 'Confirmed' || order.status === 'Cancelled').length;
        const upcomingOrders = orders.filter(order => order.status === 'Confirmed' && new Date(order.booking_info.start_date) >= new Date()).length;

        setCounts({
            all,
            new: newOrders,
            past: pastOrders,
            upcoming: upcomingOrders,
        });
    };

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
                setFilteredOrders(orders.filter(order => order.status === 'Confirmed' && new Date(order.booking_info.start_date) >= new Date()));
                break;
            default:
                setFilteredOrders(orders);
        }
    };

    const handleStatusChange = async (orderId, newStatus) => {
        try {
            await axios.put('/api/booking', { orderId, status: newStatus });
            const updatedOrders = orders.map(order =>
                order._id === orderId ? { ...order, status: newStatus } : order
            );
            setOrders(updatedOrders);
            setFilteredOrders(updatedOrders);
            calculateCounts(updatedOrders); // Recalculate counts after status change
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar onFilterChange={handleFilterChange} counts={counts} />
            <div className="flex-1 p-4 md:p-6 bg-gradient-to-r from-gray-50 to-gray-100">
                <div className="w-full max-w-5xl mx-auto">
                    {filteredOrders.length === 0 ? (
                        <p className="text-center text-gray-500">No orders found</p>
                    ) : (
                        filteredOrders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white p-6 rounded-lg shadow-xl border border-gray-200 mb-6 hover:scale-105 hover:shadow-2xl transform transition duration-500 ease-in-out"
                                style={{
                                    background: 'linear-gradient(135deg, #f8f9fa, #e0e0e0)',
                                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                                }}
                            >
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6">
                                    <div className="space-y-4">
                                        <div className="flex items-center text-gray-700">
                                            <FaBook className="text-yellow-500 text-lg mr-2" />
                                            <span className="font-extrabold text-purple-600 text-lg">Title: </span>
                                            <span className="ml-2 text-lg">{order.title}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <FaFileInvoice className="text-blue-500 text-lg mr-2" />
                                            <span className="font-bold">Service: </span>
                                            <span className="ml-2">{order.drone_services_info_id}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <FaPhone className="text-teal-500 text-lg mr-2" />
                                            <span className="font-bold">Phone: </span>
                                            <span className="ml-2">{order.phone_number}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <FaCalendarAlt className="text-indigo-500 text-lg mr-2" />
                                            <span className="font-bold">Start Date:</span>
                                            <span className="ml-2">{new Date(order.booking_info.start_date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <FaCalendarAlt className="text-indigo-500 text-lg mr-2" />
                                            <span className="font-bold">End Date:</span>
                                            <span className="ml-2">{new Date(order.booking_info.end_date).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <FaDollarSign className="text-green-500 text-lg mr-2" />
                                            <span className="font-bold">Price:</span>
                                            <span className="ml-2 text-lg font-bold ">${order.price}</span>
                                        </div>                                         
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex items-center text-gray-700">
                                            <span className="font-bold text-lg">Status: </span>
                                            {order.status === 'Confirmed' ? (
                                                <AiOutlineCheckCircle className="text-green-600 text-lg ml-2" />
                                            ) : order.status === 'Cancelled' ? (
                                                <AiOutlineCloseCircle className="text-red-500 text-lg ml-2" />
                                            ) : (
                                                <AiOutlineClockCircle className="text-yellow-400 text-lg ml-2" />
                                            )}
                                            <span className="ml-2">{order.status}</span>
                                        </div>
                                        <div className="flex items-center text-gray-700">
                                            <FaMobileAlt className="text-blue-500 text-lg mr-2" />
                                            <span className="font-bold">Product ID: </span>
                                            <span className="ml-2">{order.product_id}</span>
                                        </div>                                        
                                        <div className="flex items-center text-gray-700">
                                            <FaUser className="text-blue-500 text-lg mr-2" />
                                            <span className="font-bold">Email: </span>
                                            <span className="ml-2">{order.email}</span>
                                        </div>  
                                        <div className="flex text-gray-700">
                                            <FaMapMarkerAlt className="text-red-500 text-lg mr-2" />
                                            <span className="font-bold">Address: </span>
                                            <span className="ml-2">{`${order.address.address1}, ${order.address.city}, ${order.address.state}, ${order.address.country} - ${order.address.pin}`}</span>
                                        </div>
                                        {order.status === 'Pending' && (
                                            <div className="flex justify-start space-x-4">
                                                <button
                                                    onClick={() => handleStatusChange(order._id, 'Confirmed')}
                                                    className="bg-green-500 text-white px-4 py-2 rounded-md"
                                                >
                                                    Confirm
                                                </button>
                                                <button
                                                    onClick={() => handleStatusChange(order._id, 'Cancelled')}
                                                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        )}
                                    </div>                                
                                </div>
                                <div className="mt-4 pl-2 pr-2  text-center text-gray-700">
                                    <div className="flex justify-center">
                                        <MdDescription className="text-yellow-500 text-xl mr-2" />
                                        <span className="font-bold">Description:</span>
                                        <span className="ml-2 text-justify">{order.description}</span>
                                    </div>
                                </div>                                    
                                <div className="my-4 border-t border-gray-300"></div>

                                <div className="text-center text-gray-400 font-semibold text-sm">
                                    Booking ID: {order._id}
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Orders;
