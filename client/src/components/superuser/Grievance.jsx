'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { saveAs } from 'file-saver';
import XLSX from 'xlsx';

const Grievance = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch the data from the API
    const fetchContacts = async () => {
      try {
        const response = await axios.get('/api/contact'); // Update this with the correct endpoint if needed
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  // Function to download table as Excel file
  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(contacts);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');

    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(data, 'contacts.xlsx');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Contact Grievances</h1>
      <table className="min-w-full bg-white border border-gray-300 shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b">{contact.name}</td>
              <td className="px-4 py-2 border-b">{contact.email}</td>
              <td className="px-4 py-2 border-b">{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={downloadExcel}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700"
      >
        Download as Excel
      </button>
    </div>
  );
};

export default Grievance;
