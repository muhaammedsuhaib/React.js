import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import UserLayot from './UserLayot';

const CustomChromePicker = ({ color, onChangeComplete }) => {
  // Using default parameter in the functional component
  const pickerColor = color || '#ffffff'; // Default color if none is provided

  return <ChromePicker color={pickerColor} onChangeComplete={onChangeComplete} />;
};

const Custom = () => {
  const [theme, setTheme] = useState(null);
  const [currentColor, setCurrentColor] = useState('#ffffff');

  const handleAddColor = () => {
    setTheme(currentColor);
  };

  return (
    <div className="w-screen h-screen overflow-auto">
      {theme ? (        
          <UserLayot setTheme={setTheme} theme={theme} />
          
      ) : (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          {/* Custom wrapper for ChromePicker */}
          <input
          type="color"
          id="colorPicker"
          value={currentColor}
          onChange={(e)=>setCurrentColor(e.target.value)}
          className="w-16 h-16 border-2 border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
          <button
            onClick={handleAddColor}
            className="p-3 mt-4 rounded-lg shadow-lg bg-blue-500 text-white"
          >
            Submit Color
          </button>
        </div>
      )}
    </div>
  );
};

export default Custom;
