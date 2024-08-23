// components/ListView.jsx
"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Navigation from "./Navigation/Nav.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import { useSearchParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";
import debounce from "lodash.debounce";

function ListView() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "";
  const [selectedCategory, setSelectedCategory] = useState(service);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/drone-services");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = debounce((event) => {
    setQuery(event.target.value);
  }, 300);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value); 
  };

  const filteredData = useMemo(() => {
    return products
      .filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      )
      .filter(({ title, drone_services_id, description, price_info }) => {
        if (!selectedCategory) return true;
        const category = selectedCategory.toLowerCase();
        const loc = selectedLocation.toLowerCase();
        console.log(category)
        console.log(loc)
        return (
          title.toLowerCase() === category ||
          description.memory_storage.toString().toLowerCase() === category ||
          description.max_flight_time.toString().toLowerCase() === category ||
          price_info.hourly_price.toString().toLowerCase() === category ||
          drone_services_id.toLowerCase() === category
        );
      });
  }, [products, query, selectedCategory]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/6">
        <Sidebar handleChange={handleCategoryChange} />
      </div>
      <div className="w-full lg:w-5/6 p-2 pl-4 pr-4 ">
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleCategoryChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredData.length ? (
            filteredData.map(({ _id ,images, title, price_info, move }) => (
              <Card
                key={title}
                img={images[0]?.path}
                title={title}
                star={<AiFillStar className="rating-star" />}
                reviews="(105 reviews)"
                prevPrice={price_info.fullday_price}
                newPrice={price_info.hourly_price}
                move={_id}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListView;
