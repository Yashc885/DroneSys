"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const RegisterVendor2 = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user_id = e.target[0].value;
    const company_name = e.target[1].value;
    const company_email = e.target[2].value;
    const company_contact = e.target[3].value;
    const company_address1 = e.target[4].value;
    const company_address2 = e.target[5].value;
    const city = e.target[6].value;
    const state = e.target[7].value;
    const country = e.target[8].value;
    const pin = e.target[9].value;

    if (!user_id || !company_name || !company_email || !company_contact || !company_address1 || !city || !state || !country || !pin) {
      setError("All fields are required");
      toast.error("All fields are required");
      return;
    }

    if (!isValidEmail(company_email)) {
      setError("Email is invalid");
      toast.error("Email is invalid");
      return;
    }

    setError("");

    try {
      const response = await axios.post('/api/vendor', {
        user_id,
        company_name,
        company_email,
        company_contact,
        company_address: {
          address1: company_address1,
          address2: company_address2,
          city,
          state,
          country,
          pin
        }
      });

      toast.success("Vendor registration successful");
      router.push("/"); // Redirect to the homepage or another page as needed
    } catch (err) {
      toast.error(err.response?.data?.msg || "Registration failed");
    }
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/3d-render-drone-flying-sunset-ocean_1048-5824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid')" }}>
      <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="bg-white px-6 py-6 shadow sm:rounded-lg sm:px-12">
          <h1 className="font-extrabold text-2xl md:text-3xl text-center">Register Vendor</h1>
          <form className="space-y-6 py-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="user_id"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                User ID
              </label>
              <div className="mt-2">
                <input
                  id="user_id"
                  name="user_id"
                  type="text"
                  autoComplete="user_id"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company_name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Name
              </label>
              <div className="mt-2">
                <input
                  id="company_name"
                  name="company_name"
                  type="text"
                  autoComplete="company_name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company_email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Email Address
              </label>
              <div className="mt-2">
                <input
                  id="company_email"
                  name="company_email"
                  type="email"
                  autoComplete="company_email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company_contact"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company Contact
              </label>
              <div className="mt-2">
                <input
                  id="company_contact"
                  name="company_contact"
                  type="text"
                  autoComplete="company_contact"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company_address1"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Line 1
              </label>
              <div className="mt-2">
                <input
                  id="company_address1"
                  name="company_address1"
                  type="text"
                  autoComplete="company_address1"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company_address2"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Address Line 2 (optional)
              </label>
              <div className="mt-2">
                <input
                  id="company_address2"
                  name="company_address2"
                  type="text"
                  autoComplete="company_address2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="city"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  id="state"
                  name="state"
                  type="text"
                  autoComplete="state"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  autoComplete="country"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
              <div>
              <label
                htmlFor="pin"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PIN Code
              </label>
              <div className="mt-2">
                <input
                  id="pin"
                  name="pin"
                  type="text"
                  autoComplete="pin"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="accept-terms"
                  name="accept-terms"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                />
                <label
                  htmlFor="accept-terms"
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
                Register
              </button>
              <p className="text-red-600 text-center text-[16px] my-4">
                {error && error}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterVendor2;
