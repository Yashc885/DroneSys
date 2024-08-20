'use client';
import React, { useState } from "react";
import Image from "next/image";
import { FaCalendarAlt, FaSearch } from "react-icons/fa";
import { Listbox, ListboxItem, Input } from "@nextui-org/react";
import { Button } from "@/components/ui/button";
import Agriculture from "../../assets/agri.svg";
import dynamic from 'next/dynamic';

// Dynamically import NavbarSimple without SSR
const NavbarSimple = dynamic(() => import('./../Common/Navbar.jsx'), { ssr: false });

// List of Indian states
const states = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa',
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland',
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [startDate, setStartDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  });
  const [endDate, setEndDate] = useState(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split("T")[0];
  });
  const [filteredStates, setFilteredStates] = useState([]);
  const [dropdownValue, setDropdownValue] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = () => {
    if (searchLocation && startDate && endDate && dropdownValue) {
      window.location.href = `/listview?service=${dropdownValue}&state=${searchLocation}`;
    }
  };

  const searchStates = (searchQuery) => {
    const filteredStates = states.filter((state) =>
      state.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStates(filteredStates);
  };

  return (
    <div>
      {/* <NavbarSimple /> */}
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10">
          <Image
            src="https://e1.pxfuel.com/desktop-wallpaper/682/1001/desktop-wallpaper-10-amazing-nature-footage-by-drones-drones.jpg"
            fill
            alt="Background"
            className="object-cover h-full w-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 p-4 sm:p-8 bg-white rounded-xl shadow-lg text-black text-center max-w-4xl w-full mx-4">
          <div className="py-4">
            <div className="text-center flex flex-col gap-2">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
                Best Service provided specially for you!
              </h2>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                Explore the world of drones.
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <div className="relative col-span-1">
                <Input
                  color="danger"
                  variant="bordered"
                  className="text-black placeholder-black border border-black"
                  startContent={<FaSearch />}
                  value={searchLocation}
                  onChange={(e) => {
                    setSearchLocation(e.target.value);
                    searchStates(e.target.value);
                  }}
                  placeholder="Search State"
                />
                {filteredStates.length > 0 && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-black rounded-sm shadow-lg z-50">
                    <Listbox
                      aria-label="States"
                      onAction={(key) => {
                        setSearchLocation(key);
                        setFilteredStates([]);
                      }}
                      className="rounded-sm"
                    >
                      {filteredStates.map((state) => (
                        <ListboxItem key={state} color="danger" className="text-black">
                          {state}
                        </ListboxItem>
                      ))}
                    </Listbox>
                  </div>
                )}
              </div>
              <Input
                type="date"
                placeholder="Start Date"
                variant="bordered"
                color="danger"
                className="text-black border border-black"
                startContent={<FaCalendarAlt />}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
              <Input
                type="date"
                placeholder="End Date"
                variant="bordered"
                color="danger"
                className="text-black border border-black"
                startContent={<FaCalendarAlt />}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
              <div className="relative col-span-2 sm:col-span-1 lg:col-span-1">
                <Input
                  color="danger"
                  variant="bordered"
                  className="text-black placeholder-black border border-black"
                  value={dropdownValue}
                  onFocus={() => setIsDropdownOpen(true)}
                  onChange={(e) => setDropdownValue(e.target.value)}
                  placeholder="Select Service"
                />
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 w-full mt-1 bg-white border border-black rounded-sm shadow-lg z-50">
                    <Listbox
                      aria-label="Select Service"
                      onAction={(key) => {
                        setDropdownValue(key);
                        setIsDropdownOpen(false);
                      }}
                      className="rounded-sm"
                    >
                      {["photography", "videography", "agriculture", "mining", "security"].map((option) => (
                        <ListboxItem key={option} value={option} color="danger" className="text-black">
                          {option}
                        </ListboxItem>
                      ))}
                    </Listbox>
                  </div>
                )}
              </div>
              <Button
                type="button"
                size="lg"
                className="col-span-2 sm:col-span-2 lg:col-span-4 p-3 bg-rose-500 hover:bg-rose-600 rounded-xl text-lg text-white font-medium transition duration-300"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
