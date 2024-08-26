"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DroneCard from "./DroneCard";
import { FaBox, FaPlus, FaTimes } from 'react-icons/fa';

const ProductList = () => {
  const [droneServices, setDroneServices] = useState([]);
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem('vendor_id') || "",
    drone_services_id: "",
    title: "",
    description: {
      description: "", weight: "", max_ascent_speed: "", max_descent_speed: "",
      max_forward_speed: "", max_ceiling: "", max_flight_time: "", max_weight_carry: "",
      memory_storage: ""
    },
    price_info: { hourly_price: "", fullday_price: "" },
    images: [{ type: "url", path: "" }],
    category: "", move: "", location: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [productsFetched, setProductsFetched] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (productsFetched) {
      fetchDroneServices();
    }
  }, [productsFetched]);

  const fetchDroneServices = async () => {
    try {
      const response = await axios.get("/api/drone-services");
      setDroneServices(response.data);
    } catch (error) {
      console.error("Error fetching drone services:", error);
    }
  };

  const handleToggleFetch = () => {
    setProductsFetched((prev) => !prev);
    if (productsFetched) setShowForm(false);
  };

  const handleSelectDrone = (drone) => {
    setFormData(drone);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("description.") || name.startsWith("price_info.") || name.startsWith("images.")) {
      const [prefix, field] = name.split(".");
      
      if (prefix === "images") {
        const [index, subField] = field.split(".");
        setFormData((prev) => ({
          ...prev,
          images: prev.images.map((image, idx) =>
            idx === parseInt(index, 10) ? { ...image, [subField]: value } : image
          )
        }));
      } else {
        setFormData((prev) => ({
          ...prev,
          [prefix]: {
            ...prev[prefix],
            [field]: value
          }
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`/api/drone-services/${formData._id}`, formData);
        setStatusMessage("Product updated successfully");
      } else {
        await axios.post("/api/drone-services", formData);
        setStatusMessage("Product added successfully");
      }
      fetchDroneServices();
      setShowForm(false);
      setIsEditing(false);
      setFormData({
        user_id: localStorage.getItem('vendor_id') || "",
        drone_services_id: "",
        title: "",
        description: {
          description: "", weight: "", max_ascent_speed: "", max_descent_speed: "",
          max_forward_speed: "", max_ceiling: "", max_flight_time: "", max_weight_carry: "",
          memory_storage: ""
        },
        price_info: { hourly_price: "", fullday_price: "" },
        images: [{ type: "url", path: "" }],
        category: "", move: "", location: ""
      });
    } catch (error) {
      setStatusMessage("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/drone-services/${id}`);
      fetchDroneServices();
    } catch (error) {
      console.error("Error deleting drone service:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 flex ">
    <div className="flex flex-col w-64 min-h-screen text-white p-4 border-r border-black bg-white">
  <div className="mb-4 flex flex-col items-center">
    <div className="text-lg md:text-xl text-black font-bold">Products</div>
    <div className="py-4"></div>
    <button
      onClick={handleToggleFetch}
      className={`flex items-center px-4 py-2 rounded w-full justify-center ${
        productsFetched ? 'bg-red-500 text-white' : 'bg-white text-black border border-black hover:bg-red-400 hover:text-white'
      }`}
    >
      <FaBox className="mr-2" />
      {productsFetched ? 'Close' : 'My Products'}
    </button>
  </div>
  <button
    onClick={() => setShowForm((prev) => !prev)}
    className={`flex items-center px-4 py-2 rounded w-full justify-center ${
      showForm ? 'bg-red-500 text-white' : 'bg-white text-black border border-black hover:bg-red-400 hover:text-white'
    }`}
  >
    {showForm ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
    {showForm ? 'Cancel' : 'Add Product'}
  </button>
</div>



      <div className="flex-1 ml-4  bg-gray-50 ">
        {statusMessage && <p className="text-sm mt-2">{statusMessage}</p>}

        {productsFetched && (
          <div className="py-16  ">
            {droneServices.map((drone) => (
              <DroneCard
                key={drone._id}
                drone={drone}
                onEdit={handleSelectDrone}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {showForm && (
          <div className="mt-8 p-4 border border-gray-300 rounded bg-white">
            <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Drone Service" : "Add New Drone Service"}</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="drone_services_id" className="block text-sm font-medium text-gray-700">Drone Services ID</label>
                  <input
                    id="drone_services_id"
                    name="drone_services_id"
                    type="text"
                    value={formData.drone_services_id}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2 text-sm"
                  required
                />
              </div>

              <div>
                <label htmlFor="description.description" className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description.description"
                  name="description.description"
                  value={formData.description.description}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2 text-sm"
                  rows="4"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="description.weight" className="block text-sm font-medium text-gray-700">Weight</label>
                  <input
                    id="description.weight"
                    name="description.weight"
                    type="text"
                    value={formData.description.weight}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.max_ascent_speed" className="block text-sm font-medium text-gray-700">Max Ascent Speed</label>
                  <input
                    id="description.max_ascent_speed"
                    name="description.max_ascent_speed"
                    type="text"
                    value={formData.description.max_ascent_speed}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.max_descent_speed" className="block text-sm font-medium text-gray-700">Max Descent Speed</label>
                  <input
                    id="description.max_descent_speed"
                    name="description.max_descent_speed"
                    type="text"
                    value={formData.description.max_descent_speed}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.max_forward_speed" className="block text-sm font-medium text-gray-700">Max Forward Speed</label>
                  <input
                    id="description.max_forward_speed"
                    name="description.max_forward_speed"
                    type="text"
                    value={formData.description.max_forward_speed}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.max_ceiling" className="block text-sm font-medium text-gray-700">Max Ceiling</label>
                  <input
                    id="description.max_ceiling"
                    name="description.max_ceiling"
                    type="text"
                    value={formData.description.max_ceiling}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.max_flight_time" className="block text-sm font-medium text-gray-700">Max Flight Time</label>
                  <input
                    id="description.max_flight_time"
                    name="description.max_flight_time"
                    type="text"
                    value={formData.description.max_flight_time}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.max_weight_carry" className="block text-sm font-medium text-gray-700">Max Weight Carry</label>
                  <input
                    id="description.max_weight_carry"
                    name="description.max_weight_carry"
                    type="text"
                    value={formData.description.max_weight_carry}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="description.memory_storage" className="block text-sm font-medium text-gray-700">Memory Storage</label>
                  <input
                    id="description.memory_storage"
                    name="description.memory_storage"
                    type="text"
                    value={formData.description.memory_storage}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="price_info.hourly_price" className="block text-sm font-medium text-gray-700">Hourly Price</label>
                  <input
                    id="price_info.hourly_price"
                    name="price_info.hourly_price"
                    type="text"
                    value={formData.price_info.hourly_price}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="price_info.fullday_price" className="block text-sm font-medium text-gray-700">Full-day Price</label>
                  <input
                    id="price_info.fullday_price"
                    name="price_info.fullday_price"
                    type="text"
                    value={formData.price_info.fullday_price}
                    onChange={handleChange}
                    className="block w-full mt-1 border rounded-md p-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="images.0.path" className="block text-sm font-medium text-gray-700">Image URL</label>
                <input
                  id="images.0.path"
                  name="images.0.path"
                  type="text"
                  value={formData.images[0].path}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                <input
                  id="category"
                  name="category"
                  type="text"
                  value={formData.category}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="move" className="block text-sm font-medium text-gray-700">Move</label>
                <input
                  id="move"
                  name="move"
                  type="text"
                  value={formData.move}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2 text-sm"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                >
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
