'use client';
import React, { useState } from 'react';
import { FaClipboardList, FaArchive, FaList } from 'react-icons/fa';

const Sidebar = ({ onFilterChange }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="w-64 min-h-screen  bg-white text-black h-full flex flex-col">
            <div className="p-4 text-center font-bold text-lg border-b border-gray-700">
                Orders
            </div>
            <div className="flex flex-col">
                <button
                    className={`p-4 flex items-center ${activeFilter === 'all' ? 'bg-red-400' : 'hover:bg-red-500'} border-b border-gray-700`}
                    onClick={() => handleFilterChange('all')}
                >
                    <FaList className="mr-2" />
                    All Orders
                </button>
                <button
                    className={`p-4 flex items-center ${activeFilter === 'new' ? 'bg-red-400' : 'hover:bg-red-500'} border-b border-gray-700`}
                    onClick={() => handleFilterChange('new')}
                >
                    <FaClipboardList className="mr-2" />
                    New Orders
                </button>
                <button
                    className={`p-4 flex items-center ${activeFilter === 'past' ? 'bg-red-400' : 'hover:bg-red-500'} border-b border-gray-700`}
                    onClick={() => handleFilterChange('past')}
                >
                    <FaArchive className="mr-2" />
                    Past Orders
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
