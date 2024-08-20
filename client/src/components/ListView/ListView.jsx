// components/ListView.jsx
"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Navigation from "./Navigation/Nav.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import { useSearchParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";

function ListView() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  const [selectedCategory, setSelectedCategory] = useState(service);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/drone-services");
        console.log(response.data); // Debugging: Check the data structure
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, query) {
    let filteredProducts = products;
    console.log(products);
    console.log(query)
    console.log(selectedCategory)
   console.log(filteredProducts)

    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ title, drone_services_id, description, price_info }) =>
          title.toLowerCase() === selectedCategory.toLowerCase() ||
          description.memory_storage.toString().toLowerCase() === selectedCategory.toLowerCase() ||
          description.max_flight_time.toString().toLowerCase() === selectedCategory.toLowerCase() ||
          price_info.hourly_price.toString().toLowerCase() === selectedCategory.toLowerCase() ||
          drone_services_id.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    console.log(filteredProducts);

    

    return filteredProducts.map(
      ({ images, title, price_info, move }) => (
        <Card
          key={title} 
          img={images[0]?.path} 
          title={title}
          star={<AiFillStar className="rating-star" />} 
          reviews="(105 reviews)" 
          prevPrice={price_info.fullday_price}
          newPrice={price_info.hourly_price}
          move={move}
        />
      )
    );
  }

  const result = filteredData(products, query);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/6">
        <Sidebar handleChange={handleChange} />
      </div>
      <div className="w-full lg:w-5/6 p-2 pl-4 pr-4 ">
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {result.length ? result : <p>No products found</p>}
        </div>
      </div>
    </div>
  );
}

export default ListView;
