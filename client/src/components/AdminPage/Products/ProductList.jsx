"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ProductList = () => {
  const [droneServices, setDroneServices] = useState([]);
  const [editService, setEditService] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDroneServices = async () => {
      try {
        const response = await axios.get("/api/drone-services");
        setDroneServices(response.data);
      } catch (err) {
        toast.error("Failed to fetch drone services");
      }
    };

    fetchDroneServices();
  }, []);

  const handleEditClick = (service) => {
    setEditService(service);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const { _id, user_id, drone_services_id, title, description, price_info } = editService;

    if (!user_id || !drone_services_id || !title || !description || !price_info) {
      setError("All fields are required");
      toast.error("All fields are required");
      return;
    }

    try {
      await axios.put("/api/drone-services", {
        _id,
        user_id,
        drone_services_id,
        title,
        description,
        price_info,
      });
      toast.success("Drone service updated successfully");
      setEditService(null);
      // Refresh the list
      const response = await axios.get("/api/drone-services");
      setDroneServices(response.data);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Update failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/drone-services?_id=${id}`);
      toast.success("Drone service deleted successfully");
      // Refresh the list
      const response = await axios.get("/api/drone-services");
      setDroneServices(response.data);
    } catch (err) {
      toast.error(err.response?.data?.msg || "Delete failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Drone Services</h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {droneServices.map((service) => (
          <div key={service._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">{service.title}</h2>
            <button
              onClick={() => handleEditClick(service)}
              className="block w-full text-center bg-blue-500 text-white p-2 rounded-md mb-2"
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(service._id)}
              className="block w-full text-center bg-red-500 text-white p-2 rounded-md"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
      {editService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
            <h2 className="text-xl font-bold mb-4">Edit Drone Service</h2>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={editService.title}
                  onChange={(e) => setEditService({ ...editService, title: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                  User ID
                </label>
                <input
                  id="user_id"
                  type="text"
                  value={editService.user_id}
                  onChange={(e) => setEditService({ ...editService, user_id: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="drone_services_id" className="block text-sm font-medium text-gray-700">
                  Drone Services ID
                </label>
                <input
                  id="drone_services_id"
                  type="text"
                  value={editService.drone_services_id}
                  onChange={(e) => setEditService({ ...editService, drone_services_id: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  value={editService.description}
                  onChange={(e) => setEditService({ ...editService, description: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  rows="6"
                  required
                />
              </div>
              <div>
                <label htmlFor="price_info" className="block text-sm font-medium text-gray-700">
                  Price Info
                </label>
                <textarea
                  id="price_info"
                  value={editService.price_info}
                  onChange={(e) => setEditService({ ...editService, price_info: e.target.value })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                  rows="4"
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-4 rounded-md w-full"
                >
                  Update
                </button>
              </div>
              <button
                type="button"
                onClick={() => setEditService(null)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md w-full"
              >
                Cancel
              </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
