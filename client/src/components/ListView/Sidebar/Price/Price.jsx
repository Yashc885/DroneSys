'use client';
import React from "react";
import Input from "../../Input";

const Price = ({ selectedPrice, handleChange }) => {
  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    handleChange('price', selectedValue);
  };

  return (
    <div className="pl-8">
      <h2 className="sidebar-title text-xl md:text-2xl font-bold price-title mt-5">Price</h2>
      <label className="block mt-4">
        <input
          onChange={handleRadioChange}
          type="radio"
          value=""
          name="price"
          checked={selectedPrice === ""}
          className="mr-2 leading-tight"
        />
        <span className="text-sm">All</span>
      </label>
      <div className="py-2"></div>
      <Input
        handleChange={handleRadioChange}
        value="50"
        title="$0 - 50"
        name="price"
        checked={selectedPrice === "50"}
      />
      <Input
        handleChange={handleRadioChange}
        value="100"
        title="$50 - $100"
        name="price"
        checked={selectedPrice === "100"}
      />
      <Input
        handleChange={handleRadioChange}
        value="150"
        title="$100 - $150"
        name="price"
        checked={selectedPrice === "150"}
      />
      <Input
        handleChange={handleRadioChange}
        value="200"
        title="Over $150"
        name="price"
        checked={selectedPrice === "200"}
      />
    </div>
  );
};

export default Price;
