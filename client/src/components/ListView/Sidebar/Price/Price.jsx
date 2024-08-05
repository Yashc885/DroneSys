import React from "react";
import Input from "../../Input";

const Price = ({ handleChange }) => {
  return (
    <div className="pl-8 "> 
      <h2 className="sidebar-title text-xl md:text-2xl font-bold price-title mt-5">Price</h2>

      <label className="block mt-4">
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="test2"
          className="mr-2 leading-tight"
        />
        <span className="text-sm">All</span>
      </label>
      <div className="py-2"></div>
      <Input
        handleChange={handleChange}
        value={50}
        title="$0 - 50"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="test2"
      />

      <Input
        handleChange={handleChange}
        value={200}
        title="Over $150"
        name="test2"
      />
    </div>
  );
};

export default Price;
