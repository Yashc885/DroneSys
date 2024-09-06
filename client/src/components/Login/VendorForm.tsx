'use client';
import React, { useState } from 'react';
import axios from 'axios';

const VendorForm: React.FC = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [companyContact, setCompanyContact] = useState('');
    const [companyAddress1, setCompanyAddress1] = useState('');
    const [companyAddress2, setCompanyAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [pin, setPin] = useState('');

    const userId = localStorage.getItem('user_id');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!userId) {
            alert('User ID is missing. Please log in again.');
            return;
        }

        const data = {
            user_id: userId,
            company_name: companyName,
            company_email: companyEmail,
            company_contact: companyContact,
            company_address: {
                address1: companyAddress1,
                address2: companyAddress2,
                city,
                state,
                country,
                pin,
            },
        };

        try {
            await axios.post('/api/vendor', data);
            alert('Vendor profile created successfully');
        } catch (error: any) {
            console.error('Error creating vendor profile:', error.response?.data || error.message);
            alert('Failed to create vendor profile. Please try again.');
        }
    };

    const validateEmail = (email: string) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validatePhone = (phone: string) => {
        const regex = /^\+?[1-9]\d{1,14}$/; // E.164 format
        return regex.test(phone);
    };

    return (
        <div
            style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/3d-render-drone-flying-sunset-ocean_1048-5824.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1724630400&semt=ais_hybrid')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    width: '100%',
                    maxWidth: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '10px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: 'rgba(255, 255, 255, 0.8)' // Semi-transparent background for better readability
                }}
            >
                <input
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="email"
                    placeholder="Company Email"
                    value={companyEmail}
                    onChange={(e) => setCompanyEmail(e.target.value)}
                    required
                    style={inputStyle}
                    pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                    title="Enter a valid email address"
                />
                <input
                    type="tel"
                    placeholder="Company Contact"
                    value={companyContact}
                    onChange={(e) => setCompanyContact(e.target.value)}
                    required
                    style={inputStyle}
                    pattern="^\+?[1-9]\d{1,14}$"
                    title="Enter a valid phone number"
                />
                <input
                    type="text"
                    placeholder="Address Line 1"
                    value={companyAddress1}
                    onChange={(e) => setCompanyAddress1(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Address Line 2"
                    value={companyAddress2}
                    onChange={(e) => setCompanyAddress2(e.target.value)}
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="State"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    required
                    style={inputStyle}
                />
                <input
                    type="text"
                    placeholder="PIN"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    required
                    style={inputStyle}
                />
                <button type="submit" style={buttonStyle}>
                    Create Vendor Profile
                </button>
            </form>
        </div>
    );
};

// Inline styles for form elements
const inputStyle: React.CSSProperties = {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    fontSize: '16px',
    width: '100%',
    boxSizing: 'border-box',
};

const buttonStyle: React.CSSProperties = {
    padding: '15px',
    backgroundColor: '#0070f3',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    width: '100%',
};

export default VendorForm;
