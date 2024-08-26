// ListView.jsx
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
  const location = searchParams.get("location") || "";
  const [selectedCategory, setSelectedCategory] = useState(service);
  const [selectedLocation, setSelectedLocation] = useState(location);
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);

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
    return products.filter((product) => {
      const matchesCategory =
        !selectedCategory ||
        product.title.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesLocation =
        !selectedLocation ||
        product.location.toLowerCase().includes(selectedLocation.toLowerCase());

      const matchesQuery = product.title
        .toLowerCase()
        .includes(query.toLowerCase());

      return matchesCategory && matchesLocation && matchesQuery;
    });
  }, [products, query, selectedCategory, selectedLocation]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/6">
        <Sidebar
          handleCategoryChange={handleCategoryChange}
          handleLocationChange={handleLocationChange}
        />
      </div>
      <div className="w-full lg:w-5/6 p-2 pl-4 pr-4 ">
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleCategoryChange} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredData.length ? (
            filteredData.map(({ _id, images, title, price_info, move }) => (
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
