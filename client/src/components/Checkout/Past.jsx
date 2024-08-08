'use client'
import React from 'react';

const Past = () => {
  
  const data = [
    { service: 'The_Nun', drone: 'Drone X', company: 'Company 4', status: 2 },
    { service: ' SKYDIO2', drone: 'Drone Y', company: 'Company 5', status: 1 },
    { service: 'DJI PHANTOM', drone: 'Drone Z', company: 'Company 6', status: 0 },
  ];

  
  const statusLabels = ['Denied', 'Success', 'Pending'];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Drone</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.service}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.drone}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.company}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <span
                  className={`inline-flex items-center px-3 py-1.5 text-sm font-medium rounded-full ${
                    item.status === 0 ? 'bg-red-100 text-red-800' : item.status === 1 ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {statusLabels[item.status]}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Past;
