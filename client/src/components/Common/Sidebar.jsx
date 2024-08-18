// components/Sidebar.js
import { useState } from 'react';
import { FaUserCircle, FaBox, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = ({ isOpen }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <div className="flex items-center p-4 border-b border-gray-700">
        <div className="w-12 h-12 bg-gray-600 flex items-center justify-center rounded-full mr-4">
          <FaUserCircle size={24} />
        </div>
        <div className="text-xl font-semibold">User</div>
      </div>
      <div className="flex flex-col mt-4">
        <a href="/profile" className="flex items-center p-4 hover:bg-gray-700">
          <FaUserCircle className="mr-3" />
          <span>Your Profile</span>
        </a>
        <a href="/orders" className="flex items-center p-4 hover:bg-gray-700">
          <FaBox className="mr-3" />
          <span>Your Orders</span>
        </a>
        <a href="/logout" className="flex items-center p-4 hover:bg-gray-700">
          <FaSignOutAlt className="mr-3" />
          <span>Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
