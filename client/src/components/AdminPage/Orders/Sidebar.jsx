'use client';
import React, { useState } from 'react';
import { FaClipboardList, FaArchive, FaList, FaCalendarAlt } from 'react-icons/fa';

const Sidebar = ({ onFilterChange, counts }) => {
    const [activeFilter, setActiveFilter] = useState('all');

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
        onFilterChange(filter);
    };

    return (
        <div className="w-64 md:min-h-screen bg-white text-black h-full flex flex-col ">
            <div className="p-4 text-center font-bold text-lg border-b border-gray-300">
                Orders
            </div>
            <div className="flex flex-col">
                <button
                    aria-label="All Orders"
                    className={`p-4 flex items-center ${activeFilter === 'all' ? 'bg-red-500 text-white' : 'hover:bg-red-400'} border-b border-gray-300 transition-colors duration-300`}
                    onClick={() => handleFilterChange('all')}
                >
                    <FaList className="mr-3 text-lg" />
                    All Orders ({counts.all})
                </button>
                <button
                    aria-label="New Orders"
                    className={`p-4 flex items-center ${activeFilter === 'new' ? 'bg-red-500 text-white' : 'hover:bg-red-400'} border-b border-gray-300 transition-colors duration-300`}
                    onClick={() => handleFilterChange('new')}
                >
                    <FaClipboardList className="mr-3 text-lg" />
                    New Orders ({counts.new})
                </button>
                <button
                    aria-label="Past Orders"
                    className={`p-4 flex items-center ${activeFilter === 'past' ? 'bg-red-500 text-white' : 'hover:bg-red-400'} border-b border-gray-300 transition-colors duration-300`}
                    onClick={() => handleFilterChange('past')}
                >
                    <FaArchive className="mr-3 text-lg" />
                    Past Orders ({counts.past})
                </button>
                <button
                    aria-label="Upcoming Orders"
                    className={`p-4 flex items-center ${activeFilter === 'upcoming' ? 'bg-red-500 text-white' : 'hover:bg-red-400'} border-b border-gray-300 transition-colors duration-300`}
                    onClick={() => handleFilterChange('upcoming')}
                >
                    <FaCalendarAlt className="mr-3 text-lg" />
                    Upcoming Orders ({counts.upcoming})
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
