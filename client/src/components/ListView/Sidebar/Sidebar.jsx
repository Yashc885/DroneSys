'use client';
import React, { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import State from "./State/State";
import { useRouter, useSearchParams } from "next/navigation";

const Sidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filters, setFilters] = useState({
    service: searchParams.get("service") || "",
    price: searchParams.get("price") || "",
    state: searchParams.get("state") || "",
  });

  const handleChange = (filterType, value) => {
    const updatedFilters = { ...filters, [filterType]: value };
    setFilters(updatedFilters);

    const queryParams = new URLSearchParams(updatedFilters).toString();
    router.push(`/listview?${queryParams}`);
  };

  return (
    <div className="">
      <section className="fixed inset-y-20 left-0 w-1/6 bg-white border-r-2 border-gray-300 flex flex-col items-center z-10">
        <div className="py-4 md:py-8">
          <h1 className="text-center font-bold text-3xl">🛒</h1>
        </div>
        <div className="flex-1 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
          <Category handleChange={handleChange} selectedService={filters.service} />
          <Price handleChange={handleChange} selectedPrice={filters.price} />
          <State handleChange={handleChange} selectedLocation={filters.state} />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
