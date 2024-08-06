"use client";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import products from "./db/data";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Navigation from "./Navigation/Nav.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import { useSearchParams } from "next/navigation";

function ListView() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  const [selectedCategory, setSelectedCategory] = useState(service);
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );
  //sidebar
  const handleChange = (event) => {
      setSelectedCategory(event.target.value);
  };
  //time
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    console.log("selected", selected);
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }

    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, memory, time, newPrice, title }) =>
          category === selected ||
          memory === selected ||
          time === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, move }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          move={move}
          className="w-full h-full"
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/6">
        <Sidebar handleChange={handleChange} />
      </div>
      <div className="w-full lg:w-5/6 p-2 pl-4 pr-4 ">
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {result}
        </div>
      </div>
    </div>
  );
}

export default ListView;
