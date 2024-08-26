import React from "react";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="bg-white shadow-lg border-b-2 border-gray-200 py-4 px-6 md:px-10 flex justify-between items-center">
      <div className="flex items-center">
        <input
          className="search-input py-2 px-4 bg-gray-100 rounded-full focus:outline-none focus:shadow-outline"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search Drone."
        />
      </div>
    </nav>
  );
};

export default Nav;
