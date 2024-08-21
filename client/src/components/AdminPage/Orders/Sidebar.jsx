'use client'
import React, { useState } from 'react';

const Sidebar = () => {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="sidebar w-full h-full bg-white p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Orders</h2>
      <ul className="space-y-4">
        <li>
          <button
            className={`text-black p-2 pl-4 pr-12 hover:underline hover:bg-gray-50 ${filter === 'new' ? 'bg-gray-200' : ''}`}
            onClick={() => handleFilterChange('new')}
          >
            New Orders
          </button>
        </li>
        <li>
          <button
            className={`text-black p-2 pl-4 pr-12 hover:underline hover:bg-gray-50 ${filter === 'past' ? 'bg-gray-200' : ''}`}
            onClick={() => handleFilterChange('past')}
          >
            Past Orders
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;