'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Adjust the import path if necessary
import Profile from './Profile'; // Adjust the import path if necessary
import ChangePassword from './ChangePassword.tsx'; // Adjust the import path if necessary

const YourProfile = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="flex">
            <Sidebar onTabChange={handleTabChange} />
            <div className="flex-1 p-6">
                {activeTab === 'profile' && <Profile />}
                {activeTab === 'password' && <ChangePassword />}
            </div>
        </div>
    );
};

export default YourProfile;
