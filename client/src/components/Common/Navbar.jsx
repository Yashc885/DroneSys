"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";
import { Button } from "@/components/ui/button";

function NavList({ setOpenNav, onLoginUser, onLoginVendor }) {
  const handleLoginUser = () => {
    onLoginUser("/login/user");
    setOpenNav(false);
  };

  const handleLoginVendor = () => {
    onLoginVendor("/login/vendor");
    setOpenNav(false); 
  };

  return (
    <ul className="my-2 flex w-full flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-8">
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-smal">
        <Link href="/services" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
          Services
        </Link>
      </Typography>
      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-smal">
        <Link href="/aboutus" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
          About
        </Link>
      </Typography>
      <Menu allowHover>
        <MenuHandler>
          <Typography as="li" variant="medium" color="black" className="p-1 font-medium cursor-pointer">
            View
          </Typography>
        </MenuHandler>
        <MenuList className="p-1 bg-white shadow-lg rounded-lg">
          <MenuItem>
            <Link href="/listview" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              ListView
            </Link>
          </MenuItem>
          <MenuItem>
            <Link href="/mapview" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              MapView
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>

      <Typography as="li" variant="small" color="blue-gray" className="p-1 font-smal">
        <Link href="/resources" className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
          Resources
        </Link>
      </Typography>
      <Menu allowHover>
        <MenuHandler>
          <Button
            type="button"
            size="lg"
            className="h-full cursor-pointer col-span-2 sm:col-span-1 p-2 bg-rose-500 hover:bg-rose-600 rounded-xl text-base text-white font-medium"
          >
            Login
          </Button>
        </MenuHandler>
        <MenuList className="p-1 bg-white shadow-lg rounded-lg">
          <MenuItem>
            <button onClick={handleLoginUser} className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              User
            </button>
          </MenuItem>
          <MenuItem>
            <button onClick={handleLoginVendor} className="flex items-center hover:text-[#2a6f97] transition-colors text-black text-base">
              Vendor
            </button>
          </MenuItem>
        </MenuList>
      </Menu>
    </ul>
  );
}

export function NavbarSimple() {
  const [openNav, setOpenNav] = useState(false);

  const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const handleLoginUser = (path) => {
    window.location.href = path; 
  };

  const handleLoginVendor = (path) => {
    window.location.href = path; 
  };

  return (
    <Navbar className="bg-[#ffffff] w-full py-2">
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
          <NavList setOpenNav={setOpenNav} onLoginUser={handleLoginUser} onLoginVendor={handleLoginVendor} />
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
        <NavList setOpenNav={setOpenNav} onLoginUser={handleLoginUser} onLoginVendor={handleLoginVendor} />
      </Collapse>
    </Navbar>
  );
}
