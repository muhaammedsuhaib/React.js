import React from 'react';
import { FaRegUserCircle } from "react-icons/fa";

const UserLayout = ({ setTheme, theme }) => {
  return (
    <div className="w-full h-screen p-5 flex flex-col md:flex-row gap-5" style={{backgroundColor:theme}}>
      {/* Sidebar */}
      <div className="w-full md:w-1/4  h-full rounded-lg shadow-lg p-5 flex flex-col items-center gap-3">
        <FaRegUserCircle size={100} className="text-white" />
        <h1 className="text-2xl font-bold text-white">Hello</h1>
        <p className="text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, nisi.
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4  rounded-md shadow-md">
        {/* Header */}
        <div className="w-full h-20  flex items-center justify-center">
          <h1 className="text-2xl font-bold text-white">Welcome to Custom Color Selector</h1>
        </div>

        {/* Content Area */}
        <div className="w-ful flex flex-col items-center justify-center gap-5 p-5">
          <h1 className="text-2xl font-bold text-white">Select a Custom Theme</h1>
          
          <button
            className=" text-gray-700 shadow-lg rounded-lg px-5 py-2 hover:bg-gray-100 transition duration-300"
            onClick={() => setTheme(null)}
          >
            Change Color
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
