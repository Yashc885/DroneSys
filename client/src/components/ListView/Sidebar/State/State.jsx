// StateFilter.js
'use client'
import React from "react";
import { useRouter } from 'next/navigation';
const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
  "Lakshadweep", "Delhi", "Puducherry", "Ladakh", "Jammu and Kashmir"
];

const State = ({ selectedLocation , handleChange }) => {
  const router = useRouter();
  console.log("selectect state " , selectedLocation)

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    handleChange(event); 
    router.push(`/listview?service=${selectedValue}`);
  };
  

  return (
    <div className="w-full px-4 py-2">
<h2 className="sidebar-title text-xl md:text-2xl font-bold price-title mt-5">State</h2>
      <select
        id="state"
        name="state"
        onChange={handleChange}
        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
      >
        <option value="">All States</option>
        {indianStates.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>
    </div>
  );
};

export default State;
