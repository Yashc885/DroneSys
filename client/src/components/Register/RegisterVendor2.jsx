"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegisterVendor2 = () => {
  const [error, setError] = useState("");
  const [cities, setCities] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const validateInput = (company, service, proofs, location) => {
    if (!company || company.trim().length === 0) {
      throw new Error("Company name is required");
    }
    if (!service || service.trim().length === 0) {
      throw new Error("Service is required");
    }
    if (!proofs || proofs.trim().length === 0) {
      throw new Error("Proofs are required");
    }
    if (!location) {
      throw new Error("Service location is required");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const company = e.target[0].value;
    const service = e.target[1].value;
    const proofs = e.target[2].value;
    const location = e.target[3].value;

    try {
      validateInput(company, service, proofs, location);
      setError("");
      toast.success("Registration successful");
      router.push("/register/vendor2/finish");
    } catch (err) {
      setError(err.message);
      toast.error(err.message);
    }
  };

  const searchCities = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://secure.geonames.org/searchJSON?q=${searchQuery}&maxRows=5&username=kmaar&style=SHORT`
      );
      const parsed = await response.json();
      setCities(parsed?.geonames.map((city) => city.name) ?? []);
    } catch (err) {
      console.error("Failed to fetch cities:", err);
      setCities([]);
    }
  };

  const handleLocationSearch = (e) => {
    setSearchQuery(e.target.value);
    if (e.target.value.length > 2) {
      searchCities(e.target.value);
    } else {
      setCities([]);
    }
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
          <h1 className="font-extrabold text-2xl md:text-3xl text-center">
            Register
          </h1>
          <form className="space-y-6 py-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name
              </label>
              <div className="mt-2">
                <input
                  id="company"
                  name="company"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="service"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service
              </label>
              <div className="mt-2">
                <input
                  id="service"
                  name="service"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="proofs"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Proofs
              </label>
              <div className="mt-2">
                <input
                  id="proofs"
                  name="proofs"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Service Location
              </label>
              <div className="mt-2">
                <input
                  id="location"
                  name="location"
                  type="text"
                  value={searchQuery}
                  onChange={handleLocationSearch}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {cities.length > 0 && (
                  <ul className="absolute bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-auto rounded-md shadow-lg z-10">
                    {cities.map((city) => (
                      <li
                        key={city}
                        className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                        onClick={() => {
                          setSearchQuery(city);
                          setCities([]);
                        }}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-gray-900"
                >
                  Accept our terms and privacy policy
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full border border-black justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Finish
              </button>
              <p className="text-red-600 text-center text-[16px] my-4">
                {error && error}
              </p>
            </div>
          </form>
          <h3 className="text-black">
            Already have an account?
            <Link href="/login/vendor">
              <span className="text-blue-300 cursor-pointer"> Login</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default RegisterVendor2;
