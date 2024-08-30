'use client'
import React, { useState } from 'react';
import axios from 'axios';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    
    try {
      await axios.post('/api/email', { email });
      setEmail('');
      setMessage('Email submitted successfully!');
    } catch (error) {
      setMessage('Error submitting email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form className="flex items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full py-3 px-4 border-gray-600 text-black placeholder-gray-400 focus:outline-none rounded-sm shadow-sm "
          required
        />
        <button
          type="submit"
          className="  bg-blue-400 py-3 px-4 text-white font-semibold "
          disabled={loading}
        >
          send
        </button>
      </form>
      {message && <p className="mt-2 text-center text-white">{message}</p>}
    </div>
  );
};

export default EmailForm;
