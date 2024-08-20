'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Newsletter = () => {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await axios.get('/api/email');
        setEmails(response.data);
      } catch (error) {
        console.error('Error fetching emails:', error);
      }
    };

    fetchEmails();
  }, []);

  const handleCopy = () => {
    const emailList = emails.map(email => email.email).join('\n');
    navigator.clipboard.writeText(emailList);
    alert('Emails copied to clipboard!');
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Newsletter Subscribers</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-200 p-2">Email</th>
          </tr>
        </thead>
        <tbody>
          {emails.map((email, index) => (
            <tr key={index} className="border border-gray-200">
              <td className="p-2">{email.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <CopyToClipboard text={emails.map(email => email.email).join('\n')}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Copy All Emails
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Newsletter;