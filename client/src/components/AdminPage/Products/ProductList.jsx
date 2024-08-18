"use client";
import React, { useState } from "react";
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
    images: [{ type: "url", path: "" }],
    category: "",
    move: "",
    location: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [productsFetched, setProductsFetched] = useState(false);

  const fetchDroneServices = async () => {
    try {
      const response = await axios.get("/api/drone-services");
      setDroneServices(response.data);
    } catch (error) {
      console.error("Error fetching drone services:", error);
    }
  };

  const handleFetchProducts = () => {
    fetchDroneServices();
    setProductsFetched(true);
  };

  const handleSelectDrone = (drone) => {
    setFormData(drone);
    setIsEditing(true);
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
      images: [{ type: "url", path: "" }],
      category: "",
      move: "",
      location: ""
    });
    setIsEditing(false);
  };

  return (
  <div className="container mx-auto p-6">
    <div className="mb-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-extrabold text-center flex-grow">Drone Services</h1>
        <button
          onClick={handleFetchProducts}
          className="bg-blue-500 text-white px-4 py-2 rounded ml-auto"
        >
          My Products
        </button>
      </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {productsFetched && droneServices.map((drone) => (
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
            {Object.keys(formData.description).map((key) => (
              <div key={key}>
                <label htmlFor={`description.${key}`} className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/_/g, ' ')}</label>
                <input
                  id={`description.${key}`}
                  name={`description.${key}`}
                  type="text"
                  value={formData.description[key]}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2"
                  required
                />
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4">
            <h3 className="text-lg font-semibold">Price Info</h3>
            {Object.keys(formData.price_info).map((key) => (
              <div key={key}>
                <label htmlFor={`price_info.${key}`} className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/_/g, ' ')}</label>
                <input
                  id={`price_info.${key}`}
                  name={`price_info.${key}`}
                  type="text"
                  value={formData.price_info[key]}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2"
                  required
                />
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4">
            <h3 className="text-lg font-semibold">Images</h3>
            {formData.images.map((image, index) => (
              <div key={index}>
                <label htmlFor={`images.${index}.path`} className="block text-sm font-medium text-gray-700">Image URL {index + 1}</label>
                <input
                  id={`images.${index}.path`}
                  name={`images.${index}.path`}
                  type="text"
                  value={image.path}
                  onChange={handleChange}
                  className="block w-full mt-1 border rounded-md p-2"
                  required
                />
              </div>
            ))}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              id="category"
              name="category"
              type="text"
              value={formData.category}
              onChange={handleChange}
              className="block w-full mt-1 border rounded-md p-2"
              required
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
              className="block w-full mt-1 border rounded-md p-2"
              required
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
              className="block w-full mt-1 border rounded-md p-2"
              required
            />
          </div>
          <div >
            <button
              type="submit"
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              {isEditing ? "Update Drone Service" : "Add Drone Service"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="mt-2 bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              Reset
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProductList;
