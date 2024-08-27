"use client";

import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Sidebar from "./Sidebar/Sidebar.jsx";
import Navigation from "./Navigation/Nav.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import { useRouter, useSearchParams } from "next/navigation";
import { AiFillStar } from "react-icons/ai";

function ListView() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const service = searchParams.get("service") || "";
  const location = searchParams.get("state") || "";

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

  useEffect(() => {
    // Filter products whenever service or location changes
    const filteredData = products.filter((product) => {
      return (
        (!service || product.drone_services_id.toLowerCase().includes(service.toLowerCase())) &&
        (!location || product.location.toLowerCase().includes(location.toLowerCase()))
      );
    });
    setFilteredProducts(filteredData);
  }, [products, service, location]);

  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-1/6">
        <Sidebar />
      </div>
      <div className="w-full lg:w-5/6 p-2 pl-4 pr-4 ">
        <Navigation />
        <Recommended handleClick={() => router.push(`/listview?service=${service}`)} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {filteredProducts.length ? (
            filteredProducts.map(({ _id, images, title, price_info, move }) => (
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
