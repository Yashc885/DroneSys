"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [droneServices, setDroneServices] = useState([]);
  const [formData, setFormData] = useState({
    user_id: "",
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
    images: []
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchDroneServices();
  }, []);

  const fetchDroneServices = async () => {
    try {
      const response = await axios.get("/api/drone-services");
      setDroneServices(response.data);
    } catch (error) {
      console.error("Error fetching drone services:", error);
    }
  };

  const handleSelectDrone = (drone) => {
    setFormData(drone);
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("description.") || name.startsWith("price_info.")) {
      const [prefix, field] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [prefix]: {
          ...prev[prefix],
          [field]: value
        }
      }));
    } else if (name.startsWith("images.")) {
      const index = parseInt(name.split(".")[1], 10);
      const newImages = [...formData.images];
      newImages[index] = value;
      setFormData((prev) => ({
        ...prev,
        images: newImages
      }));
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
        await axios.put("/api/drone-services", formData);
      } else {
        await axios.post("/api/drone-services", formData);
      }
      fetchDroneServices();
      resetForm();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/drone-services?_id=${id}`);
      fetchDroneServices();
    } catch (error) {
      console.error("Error deleting drone service:", error);
    }
  };

  const resetForm = () => {
    setFormData({
      user_id: "",
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
      images: []
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Drone Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {droneServices.map((drone) => (
          <div key={drone._id} className="p-4 border rounded-lg shadow">
            <h2 className="text-xl font-semibold">{drone.title}</h2>
            <p><strong>Description:</strong> {drone.description.description}</p>
            <p><strong>Weight:</strong> {drone.description.weight}</p>
            <p><strong>Max Ascent Speed:</strong> {drone.description.max_ascent_speed}</p>
            <p><strong>Max Descent Speed:</strong> {drone.description.max_descent_speed}</p>
            <p><strong>Max Forward Speed:</strong> {drone.description.max_forward_speed}</p>
            <p><strong>Max Ceiling:</strong> {drone.description.max_ceiling}</p>
            <p><strong>Max Flight Time:</strong> {drone.description.max_flight_time}</p>
            <p><strong>Max Weight Carry:</strong> {drone.description.max_weight_carry}</p>
            <p><strong>Memory Storage:</strong> {drone.description.memory_storage}</p>
            <p><strong>Hourly Price:</strong> {drone.price_info.hourly_price}</p>
            <p><strong>Full Day Price:</strong> {drone.price_info.fullday_price}</p>
            {drone.images && drone.images.length > 0 && (
              <div className="mt-2">
                <h3 className="text-lg font-semibold">Images</h3>
                <div className="flex space-x-2 mt-2">
                  {drone.images.map((image, index) => (
                    <img key={index} src={image.path} alt={`Drone ${index}`} className="w-24 h-24 object-cover border rounded-md" />
                  ))}
                </div>
              </div>
            )}
            <button onClick={() => handleSelectDrone(drone)} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
            <button onClick={() => handleDelete(drone._id)} className="ml-2 mt-2 bg-red-500 text-white px-4 py-2 rounded">Delete</button>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Drone Service" : "Add New Drone Service"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">User ID</label>
            <input
              id="user_id"
              name="user_id"
              type="text"
              value={formData.user_id}
              onChange={handleChange}
              className="block w-full mt-1 border rounded-md p-2"
              required
            />
          </div>
          
          <div>
            <label htmlFor="drone_services_id" className="block text-sm font-medium text-gray-700">Drone Services ID</label>
            <input
              id="drone_services_id"
              name="drone_services_id"
              type="text"
              value={formData.drone_services_id}
              onChange={handleChange}
              className="block w-full mt-1 border rounded-md p-2"
              required
            />
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="block w-full mt-1 border rounded-md p-2"
              required
            />
          </div>

          <div className="border-t mt-4 pt-4">
            <h3 className="text-lg font-semibold">Description</h3>
            <div>
              <label htmlFor="description.description" className="block text-sm font-medium text-gray-700">Description</label>
              <textarea
                id="description.description"
                name="description.description"
                value={formData.description.description}
                onChange={handleChange}
                className="block w-full mt-1 border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="description.weight" className="block text-sm font-medium text-gray-700">Weight</label>
              <input
                id="description.weight"
                name="description.weight"
                type="text"
                value={formData.description.weight}
                onChange={handleChange}
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
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
                className="block w-full mt-1 border rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="border-t mt-4 pt-4">
            <h3 className="text-lg font-semibold">Price Info</h3>
            <div>
              <label htmlFor="price_info.hourly_price" className="block text-sm font-medium text-gray-700">Hourly Price</label>
              <input
                id="price_info.hourly_price"
                name="price_info.hourly_price"
                type="text"
                value={formData.price_info.hourly_price}
                onChange={handleChange}
                className="block w-full mt-1 border rounded-md p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="price_info.fullday_price" className="block text-sm font-medium text-gray-700">Full Day Price</label>
              <input
                id="price_info.fullday_price"
                name="price_info.fullday_price"
                type="text"
                value={formData.price_info.fullday_price}
                onChange={handleChange}
                className="block w-full mt-1 border rounded-md p-2"
                required
              />
            </div>
          </div>

          <div className="border-t mt-4 pt-4">
            <h3 className="text-lg font-semibold">Images</h3>
            {formData.images.map((image, index) => (
              <div key={index} className="flex items-center mt-2">
                <input
                  name={`images.${index}`}
                  type="text"
                  value={image}
                  onChange={handleChange}
                  className="block w-full border rounded-md p-2"
                  placeholder={`Image URL ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => setFormData((prev) => ({
                ...prev,
                images: [...prev.images, ""]
              }))}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded"
            >
              Add Image
            </button>
          </div>

          <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            {isEditing ? "Update Drone Service" : "Add Drone Service"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductList;
