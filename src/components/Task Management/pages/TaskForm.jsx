// src/pages/TaskForm.js
import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for navigation

const TaskForm = ({ task, setTask }) => {
  const [formData, setFormData] = useState({ heading: "", description: "" });
  const navigate = useNavigate(); // Hook for navigation

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask([...task, { id: task.length + 1, ...formData, complite: false }]);
    setFormData({ heading: "", description: "" });
  };

  return (
    <div className='flex items-center justify-center w-full h-screen p-5 bg-gradient-to-br from-blue-200 to-purple-300'>
      <div className="absolute top-5 left-5 z-10">
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300 p-2 rounded-lg "
        >
          <IoArrowBack className="text-2xl mr-2" />
          Back to Projects
        </button>
      </div>

      <form onSubmit={handleSubmit} className='relative w-full max-w-md bg-white rounded-lg shadow-lg p-8'>
        <h1 className='text-center text-3xl font-semibold mb-6 text-gray-800'>Create New Task</h1>
        <input
          type="text"
          placeholder='Enter Heading...'
          className='block w-full mb-4 border-2 border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:outline-none'
          value={formData.heading}
          onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
          required
        />
        <textarea
          placeholder='Enter Description...'
          className='block w-full mb-6 border-2 border-gray-300 rounded-lg p-3 text-gray-700 focus:border-blue-500 focus:outline-none'
          rows="4"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button
          className='block w-full bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-lg p-3 hover:from-blue-400 hover:to-green-400 transition-colors'
          type='submit'
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
