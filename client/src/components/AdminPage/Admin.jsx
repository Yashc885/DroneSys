'use client'
import React from 'react';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';

const Admin = () => {
    const handleLogout = async () => {
        // Add your logout logic here
        console.log("Logout logic here");
    };

    return (
        <div className='container mt-3 border rounded shadow' style={{ maxWidth: '960px', margin: "auto" }}>
            <div className='row'>
                <div className='flex justify-content-between justify-content-sm-end align-items-center bg-gray-700  text-white  rounded-top px-2 py-2 ms-sm-auto'>
                    <span className='d-none d-sm-block me-auto fs-4 justify-between mx-4 py-2 text-lg  md:text-2xl  '>Admin Panel</span>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                    <button className="text-red-500 border border-1 border-red-600 rounded-lg pl-1 pr-1 mx-1 
                hover:bg-red-600 hover:text-white" onClick={handleLogout}>
                        Log-out
                    </button>

                    <Button variant= "text-white border border-2  rounded-lg pl-1 pr-1 mx-1 
                hover:bg-blue-500  hover:text-white " size="sm" className="mx-1 ">
                        <Link href="/admin/dashboard">
                            Dashboard
                        </Link>
                    </Button>

                    <Button variant= "text-white border border-2  rounded-lg pl-1 pr-1 mx-1 
                hover:bg-blue-500  hover:text-white " size="sm" className="mx-1">
                        <Link href="/admin/orders">
                            Orders
                        </Link>
                    </Button>

                    <Button variant="text-white border border-2  rounded-lg pl-1 pr-1 mx-1 
                hover:bg-blue-500  hover:text-white" size="sm" className="mx-1">
                        <Link href="/admin/products">
                            Products
                        </Link>
                    </Button>

                    <Button variant="text-white border border-2  rounded-lg pl-1 pr-1 mx-1 
                hover:bg-blue-500  hover:text-white" size="sm" className="mx-1">
                        <Link href="/admin/subscribe">
                            Subscribe
                        </Link>
                    </Button>

                </div>

                </div>
            </div>

            <div className='row'>
                <div className='col px-1 py-2'>
                    {/* Render nested routes or content here */}
                </div>
            </div>
        </div>
    );
};

export default Admin;