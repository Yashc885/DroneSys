'use client';
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ChangePassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('user_id'); // Ensure you retrieve the token correctly
            const response = await axios.post(
                "/api/change-password",
                { oldPassword, newPassword },
                { headers: { Authorization: `Bearer ${token}` } }
            );
    
            if (response.status === 200) {
                toast.success("Password updated successfully");
                setOldPassword("");
                setNewPassword("");
            } else {
                setError(response.data.msg);
                toast.error(response.data.msg);
            }
        } catch (error) {
            console.error("Error changing password:", error);
            setError("An error occurred");
            toast.error("An error occurred");
        }
    };
    

    return (
        <div className="flex min-h-screen flex-1 flex-col justify-center py-4 sm:px-4 lg:px-4">
            <div className="sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="bg-white px-6 py-4 shadow sm:rounded-lg sm:px-12">
                    <h1 className="font-extrabold text-2xl md:text-3xl text-center">Change Password</h1>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="old-password" className="block text-sm font-medium leading-6 text-gray-900">
                                Old Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="old-password"
                                    name="old-password"
                                    type="password"
                                    required
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="new-password" className="block text-sm font-medium leading-6 text-gray-900">
                                New Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="new-password"
                                    name="new-password"
                                    type="password"
                                    required
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full border border-black justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white transition-colors hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                            >
                                Change Password
                            </button>
                        </div>

                        <p className="text-red-600 text-center text-[16px] my-4">
                            {error && error}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
