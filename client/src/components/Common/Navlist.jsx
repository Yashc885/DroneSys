'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuHandler, MenuList, MenuItem } from '@material-tailwind/react';

const NavList = ({ setOpenNav, onLoginUser, onLoginVendor, user }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleLoginUser = () => {
    onLoginUser("/login/user");
    setOpenNav(false);
  };

  const handleLoginVendor = () => {
    onLoginVendor("/login/vendor");
    setOpenNav(false); 
  };

  const logOut = () =>{
    localStorage.clear();
  }

  const toggleProfileMenu = () => setShowProfileMenu(prev => !prev);

  return (
    <ul className="my-2 flex w-full flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <li>
        <Link href="/services" className="flex items-center p-2 text-black text-md md:text-lg hover:text-red-400 rounded" aria-label="Services">
          Services
        </Link>
      </li>
      <li>
        <Link href="/aboutus" className="flex items-center p-2 text-black text-md md:text-lg hover:text-red-400 rounded" aria-label="About Us">
          About
        </Link>
      </li>
      <Menu>
        <MenuHandler>
          <li className="flex items-center p-2 text-black text-md md:text-lg rounded cursor-pointer" aria-label="View">
            View
          </li>
        </MenuHandler>
        <MenuList className="p-1 bg-white shadow-lg rounded-lg">
          <MenuItem>
            <Link href="/listview" className="flex items-center p-2 text-black text-md md:text-lg hover:text-red-400 rounded" aria-label="ListView">
              ListView
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/mapview" className="flex items-center p-2 text-black text-md md:text-lg hover:text-red-400 rounded" aria-label="MapView">
              MapView
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
      <li>
        <Link href="/resources" className="flex items-center p-2 text-black text-md md:text-lg hover:text-red-400 rounded" aria-label="Resources">
          Resources
        </Link>
      </li>
      {user ? (
        <li className="relative flex items-center p-2 text-black text-lg md:text-xl rounded cursor-pointer" aria-label="Profile">
          <Image
            src={user.profilePic}
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full"
            onClick={toggleProfileMenu}
          />
          {showProfileMenu && (
            <div className="absolute -right-12 md:mt-48 w-36 bg-white shadow-lg rounded-lg z-1000 transition-opacity duration-300 opacity-100">
              <Link href="/you/orders" className="block p-2 text-black text-md md:text-lg hover:text-red-400" aria-label="Your Orders">
                Your Orders
              </Link>
              <button onClick={logOut} className="block w-full text-left p-2 text-black text-md md:text-lg hover:text-red-400" aria-label="Logout">
                Logout
              </button>
            </div>
          )}
        </li>
      ) : (
        <Menu>
          <MenuHandler>
            <button className="p-2 bg-rose-500 hover:bg-rose-600 text-white rounded-lg" aria-label="Login">
              Login
            </button>
          </MenuHandler>
          <MenuList className="p-1 bg-white ">
            <MenuItem>
              <button onClick={handleLoginUser} className="flex items-center p-2 hover:bg-gray-200 rounded" aria-label="Login as User">
                User
              </button>
            </MenuItem>
            <MenuItem>
              <button onClick={handleLoginVendor} className="flex items-center p-2 hover:bg-gray-200 rounded" aria-label="Login as Vendor">
                Vendor
              </button>
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </ul>
  );
};

export default NavList;
