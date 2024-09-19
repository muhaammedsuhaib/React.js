// src/components/Tooltip.js
import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div 
      className="relative inline-block" 
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && (
        <div className="absolute bottom-full mb-2 w-max bg-gradient-to-r from-blue-500 to-teal-500 text-white text-sm rounded-lg py-2 px-4 shadow-lg z-10 transition-opacity duration-300 opacity-100">
          {text}
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-teal-500 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
