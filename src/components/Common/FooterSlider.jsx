import React from 'react';

const FooterSlider = () => {
  return (
    <footer className="border-t shadow-xl border-gray-300 py-4 pl-4 pr-4 bg-gray-100">
      <div className="container mx-auto md:flex justify-between items-center">
        <div className="text-gray-700 text-sm">
          &copy; Copyright <a href="https://example.com" className="text-red-500 hover:text-red-700 transition duration-300">@ ABC 2024</a>
        </div>
        <div className="flex space-x-4 text-gray-700 text-sm">
          <a href="#" className="hover:text-gray-900 transition duration-300">Code of Conduct</a>
          <a href="#" className="hover:text-gray-900 transition duration-300">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition duration-300">Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSlider;
