"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import DroneCard from "./DroneCard";
import { FaBox, FaPlus, FaTimes } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

const ProductList = () => {
  const [droneServices, setDroneServices] = useState([]);
  const [formData, setFormData] = useState({
    user_id: localStorage.getItem('vendor_id') || "",
    drone_services_id: "",
    title: "",
    description: {
      description: "",
      weight: "",
      max_ascent_speed: "",
      max_descent_speed: "",
      max_forward_speed: "",
      max_ceiling: "",
      max_flight_time: "",
      max_weight_carry: "",
      memory_storage: ""
    },
    price_info: {
      hourly_price: "",
      fullday_price: ""
    },
    images: [{ type: "url", path: "" }],
    location: "",
    available: true
  });
  const [isEditing, setIsEditing] = useState(false);
  const [productsFetched, setProductsFetched] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const serviceOptions = [
    { label: 'Photography', value: 'photography' },
    { label: 'Videography', value: 'videography' },
    { label: 'Mining', value: 'mining'},
    { label: 'Security', value: 'security' },
    { label: 'Agriculture', value: 'agriculture' }
  ];

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
    setProductsFetched(prev => !prev);
    if (productsFetched) setShowForm(false);
  };

  const handleSelectDrone = (drone) => {
    setFormData(drone);
    setIsEditing(true);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const nameParts = name.split(".");
    if (nameParts.length > 1) {
      if (nameParts[0] === "description" || nameParts[0] === "price_info") {
        setFormData(prev => ({
          ...prev,
          [nameParts[0]]: {
            ...prev[nameParts[0]],
            [nameParts[1]]: value
          }
        }));
      } else if (nameParts[0] === "images") {
        const index = parseInt(nameParts[1], 10);
        setFormData(prev => ({
          ...prev,
          images: prev.images.map((image, idx) =>
            idx === index ? { ...image, [nameParts[2]]: value } : image
          )
        }));
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleToggleAvailability = () => {
    setFormData(prev => ({
      ...prev,
      available: !prev.available
    }));
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
          description: "",
          weight: "",
          max_ascent_speed: "",
          max_descent_speed: "",
          max_forward_speed: "",
          max_ceiling: "",
          max_flight_time: "",
          max_weight_carry: "",
          memory_storage: ""
        },
        price_info: {
          hourly_price: "",
          fullday_price: ""
        },
        images: [{ type: "url", path: "" }],
        location: "",
        available: true 
      });
    } catch (error) {
      setStatusMessage("Error submitting form");
      console.error("Error submitting form:", error);
    }
  };

  const handleDropdownChange = (value) => {
    setFormData(prev => ({ ...prev, drone_services_id: value }));
    setSelectedService(serviceOptions.find(option => option.value === value));
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
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="flex-shrink-0 w-full md:w-64 min-h-screen bg-white text-black border-r border-gray-200 p-4">
        <div className="mb-4 flex flex-col items-center">
          <h1 className="text-lg md:text-xl font-bold">Products</h1>
          <button
            onClick={handleToggleFetch}
            className={`flex items-center px-4 py-2 mt-4 rounded-lg w-full justify-center ${productsFetched ? 'bg-red-600 text-white' : 'bg-white text-black border border-gray-300 hover:bg-red-500 hover:text-white'}`}
          >
            <FaBox className="mr-2" />
            {productsFetched ? 'Close' : 'My Products'}
          </button>
        </div>
        <button
          onClick={() => setShowForm(prev => !prev)}
          className={`flex items-center px-4 py-2 rounded-lg w-full justify-center ${showForm ? 'bg-red-600 text-white' : 'bg-white text-black border border-gray-300 hover:bg-red-500 hover:text-white'}`}
        >
          {showForm ? <FaTimes className="mr-2" /> : <FaPlus className="mr-2" />}
          {showForm ? 'Cancel' : 'Add Product'}
        </button>
      </div>

      <div className="flex-1 bg-gray-50 p-4">
        {statusMessage && <p className="text-sm text-green-600 mb-4">{statusMessage}</p>}

        {productsFetched && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {droneServices.map(drone => (
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
          <div className="mt-8 bg-white p-6 border border-gray-300 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Drone Service" : "Add New Drone Service"}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="drone_services_id" className="text-sm font-medium text-gray-700">Drone Service Type</label>
                <select
                  id="drone_services_id"
                  name="drone_services_id"
                  value={formData.drone_services_id}
                  onChange={e => handleDropdownChange(e.target.value)}
                  className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                >
                  <option value="">Select a type</option>
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {selectedService && <span className="mt-2 text-gray-600">{selectedService.label}</span>}
              </div>

              <div className="flex flex-col">
                <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formData.title}
                  onChange={handleChange}
                  className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="description.description" className="text-sm font-medium text-gray-700">Description</label>
                <textarea
                  id="description.description"
                  name="description.description"
                  value={formData.description.description}
                  onChange={handleChange}
                  className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="description.weight" className="text-sm font-medium text-gray-700">Weight</label>
                  <input
                    id="description.weight"
                    name="description.weight"
                    type="text"
                    value={formData.description.weight}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.max_ascent_speed" className="text-sm font-medium text-gray-700">Max Ascent Speed</label>
                  <input
                    id="description.max_ascent_speed"
                    name="description.max_ascent_speed"
                    type="text"
                    value={formData.description.max_ascent_speed}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.max_descent_speed" className="text-sm font-medium text-gray-700">Max Descent Speed</label>
                  <input
                    id="description.max_descent_speed"
                    name="description.max_descent_speed"
                    type="text"
                    value={formData.description.max_descent_speed}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.max_forward_speed" className="text-sm font-medium text-gray-700">Max Forward Speed</label>
                  <input
                    id="description.max_forward_speed"
                    name="description.max_forward_speed"
                    type="text"
                    value={formData.description.max_forward_speed}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.max_ceiling" className="text-sm font-medium text-gray-700">Max Ceiling</label>
                  <input
                    id="description.max_ceiling"
                    name="description.max_ceiling"
                    type="text"
                    value={formData.description.max_ceiling}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.max_flight_time" className="text-sm font-medium text-gray-700">Max Flight Time</label>
                  <input
                    id="description.max_flight_time"
                    name="description.max_flight_time"
                    type="text"
                    value={formData.description.max_flight_time}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.max_weight_carry" className="text-sm font-medium text-gray-700">Max Weight Carry</label>
                  <input
                    id="description.max_weight_carry"
                    name="description.max_weight_carry"
                    type="text"
                    value={formData.description.max_weight_carry}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="description.memory_storage" className="text-sm font-medium text-gray-700">Memory Storage</label>
                  <input
                    id="description.memory_storage"
                    name="description.memory_storage"
                    type="text"
                    value={formData.description.memory_storage}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="price_info.hourly_price" className="text-sm font-medium text-gray-700">Hourly Price</label>
                  <input
                    id="price_info.hourly_price"
                    name="price_info.hourly_price"
                    type="text"
                    value={formData.price_info.hourly_price}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="price_info.fullday_price" className="text-sm font-medium text-gray-700">Full Day Price</label>
                  <input
                    id="price_info.fullday_price"
                    name="price_info.fullday_price"
                    type="text"
                    value={formData.price_info.fullday_price}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              </div>

              {formData.images.map((image, index) => (
                <div key={index} className="flex flex-col">
                  <label htmlFor={`images.${index}.path`} className="text-sm font-medium text-gray-700">Image URL {index + 1}</label>
                  <input
                    id={`images.${index}.path`}
                    name={`images.${index}.path`}
                    type="text"
                    value={image.path}
                    onChange={handleChange}
                    className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                  />
                </div>
              ))}

              <div className="flex flex-col">
                <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-1 border border-gray-300 rounded-lg p-2 focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  id="available"
                  name="available"
                  type="checkbox"
                  checked={formData.available}
                  onChange={handleToggleAvailability}
                  className="h-5 w-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                />
                <label htmlFor="available" className="text-sm text-gray-700">Available</label>
              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg shadow-md text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  {isEditing ? 'Update Product' : 'Add Product'}
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
