'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import NavList from './Navlist';

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);
  const [user, setUser] = useState(null);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const data = localStorage.getItem('key');
    if (data) {
      setUser({
        profilePic: "https://st2.depositphotos.com/2703645/7303/v/450/depositphotos_73039841-stock-illustration-male-avatar-icon.jpg", 
      });
    }
  }, []);

  const handleLoginUser = (path) => {
    window.location.href = path; 
  };

  const handleLoginVendor = (path) => {
    window.location.href = path; 
  };

  return (
    <Navbar className="bg-white w-full py-2 rounded-none">
      <div className="flex items-center justify-between w-full px-4 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1719187200&semt=sph"
            alt="Logo"
            width={60}
            height={60}
          />
        </Link>
        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} onLoginUser={handleLoginUser} onLoginVendor={handleLoginVendor} user={user} />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-12 w-12 text-black focus:bg-black active:bg-black lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} onLoginUser={handleLoginUser} onLoginVendor={handleLoginVendor} user={user} />
      </Collapse>
    </Navbar>
  );
}
