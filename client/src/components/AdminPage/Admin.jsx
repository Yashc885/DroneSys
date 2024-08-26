'use client'
import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/navigation';
import withAuth from './../withAuth.js'
const Admin = () => {
    const router = useRouter(); 

    const handleLogout = async () => {
        localStorage.clear();
        router.push('/'); 
    };

    return (
        <div className='container-fluid mt-3 rounded-md shadow-lg' style={{ maxWidth: '100%', margin: "auto" }}>
            <div className='bg-white py-2 rounded-t-md shadow-md'>
                <div className='container mx-auto px-4'>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg md:text-2xl font-semibold text-gray-800'>Admin Panel</span>
                        <div className='flex space-x-2'>
                            <button
                                className="text-red-500 border border-red-600 rounded-lg px-4 py-2 hover:bg-red-600 hover:text-white font-semibold"
                                onClick={handleLogout}
                            >
                                Log-out
                            </button>
                            <Button
                                variant="link"
                                className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white font-semibold"
                            >
                                <Link href="/admin/dashboard">
                                    Dashboard
                                </Link>
                            </Button>
                            <Button
                                variant="link"
                                className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white font-semibold"
                            >
                                <Link href="/admin/orders">
                                    Orders
                                </Link>
                            </Button>
                            <Button
                                variant="link"
                                className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white font-semibold"
                            >
                                <Link href="/admin/products">
                                    Products
                                </Link>
                            </Button>
                            <Button
                                variant="link"
                                className="text-gray-700 border border-gray-300 rounded-lg px-4 py-2 hover:bg-blue-500 hover:text-white font-semibold"
                            >
                                <Link href="/admin/subscribe">
                                    Subscribe
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withAuth(Admin);
