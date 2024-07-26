'use client'
import React from 'react';
import Map from "./map";
import {NavbarSimple} from "./../Common/Navbar.jsx"
const Mapview = () => {
  return (
    <div className="h-screen">
    <NavbarSimple />
        <div className="md:flex ">
            <div className="w-[50%]">
                <div className="p-4 md:p-6 ">
                    <Map />
                </div>
            </div>
            <div className="w-[50%]"></div>
        </div>
    </div>
  )
}

export default Mapview