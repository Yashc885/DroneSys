'use client';
import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const Sidebar = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        onTabChange(tab);
    };

    return (
        <div className="w-64 min-h-screen  text-black flex flex-col">
            <div className="p-4 text-center font-bold text-lg bg-red-400' : 'hover:bg-red-500'} border-b border-gray-700">
                Settings
            </div>
            <div className="flex flex-col">
                <button
                    className={`p-4 flex items-center ${activeTab === 'profile' ? 'bg-red-400' : 'hover:bg-red-500'} border-b border-gray-700`}
                    onClick={() => handleTabChange('profile')}
                >
                    <FaUser className="mr-2" />
                    Your Profile
                </button>
                <button
                    className={`p-4 flex items-center ${activeTab === 'password' ? 'bg-red-400' : 'hover:bg-red-500'} border-b border-gray-700`}
                    onClick={() => handleTabChange('password')}
                >
                    <FaLock className="mr-2" />
                    Change Password
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
