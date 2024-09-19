// src/Home.js
import React from 'react';
import Tooltip from './Tooltip';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';

const Home = () => {
  const tableData = [
    { name: 'Suhaib', age: 25, job: 'MERN Stack Developer', email: 'suhaib@example.com', address: '123 Tech Lane' },
    { name: 'Alice', age: 30, job: 'Engineer', email: 'alice@example.com', address: '123 Main St' },
    { name: 'Bob', age: 25, job: 'Designer', email: 'bob@example.com', address: '456 Elm St' },
    { name: 'Charlie', age: 35, job: 'Teacher', email: 'charlie@example.com', address: '789 Oak St' },
    { name: 'David', age: 28, job: 'Developer', email: 'david@example.com', address: '321 Maple St' },
    { name: 'Eve', age: 40, job: 'Manager', email: 'eve@example.com', address: '654 Pine St' },
  ];
  
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <div className="absolute top-5 left-5 z-10">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-300 p-2"
        >
          <IoArrowBack className="text-2xl mr-2" />
          Back to Projects
        </button>
      </div>

      <div className="overflow-x-auto w-full max-w-6xl mt-12">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
            <tr>
              <th className="py-3 px-4 border-b text-left">Name</th>
              <th className="py-3 px-4 border-b text-left">Age</th>
              <th className="py-3 px-4 border-b text-left">Job</th>
              <th className="py-3 px-4 border-b text-left">Email</th>
              <th className="py-3 px-4 border-b text-left">Address</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {tableData.map((row, index) => (
              <tr key={index} className="hover:bg-gradient-to-r from-blue-100 to-green-100 transition-colors duration-300">
                <td className="py-3 px-4 border-b">
                  <Tooltip text={`Name: ${row.name}`}>
                    <span className="hover:text-blue-500 transition-colors duration-300">{row.name}</span>
                  </Tooltip>
                </td>
                <td className="py-3 px-4 border-b">
                  <Tooltip text={`Age: ${row.age}`}>
                    <span className="hover:text-blue-500 transition-colors duration-300">{row.age}</span>
                  </Tooltip>
                </td>
                <td className="py-3 px-4 border-b">
                  <Tooltip text={`Job: ${row.job}`}>
                    <span className="hover:text-blue-500 transition-colors duration-300">{row.job}</span>
                  </Tooltip>
                </td>
                <td className="py-3 px-4 border-b">
                  <Tooltip text={`Email: ${row.email}`}>
                    <span className="hover:text-blue-500 transition-colors duration-300">{row.email}</span>
                  </Tooltip>
                </td>
                <td className="py-3 px-4 border-b">
                  <Tooltip text={`Address: ${row.address}`}>
                    <span className="hover:text-blue-500 transition-colors duration-300">{row.address}</span>
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
