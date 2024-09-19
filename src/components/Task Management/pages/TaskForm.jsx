import React, { useState } from 'react';

const TaskForm = ({ task, setTask }) => {
  const [formData, setFormData] = useState({ heading: "", description: "" });

  const handleSubmit = (event) => {
    event.preventDefault();
    setTask([...task, { id: task.length + 1, ...formData, complite: false }]);
    setFormData({ heading: "", description: "" });
  };

  return (
    <div className='flex items-center justify-center w-full h-screen p-5'>
      <form onSubmit={handleSubmit} className='w-full max-w-md rounded-sm shadow-lg p-5 bg-white'>
        <h1 className='text-center text-2xl mb-5'>Create New Task</h1>
        <input
          type="text"
          placeholder='Enter Heading...'
          className='block w-full mb-3 border-2 border-gray-300 rounded-lg p-2'
          value={formData.heading}
          onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder='Enter Description...'
          className='block w-full mb-5 border-2 border-gray-300 rounded-lg p-2'
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
        />
        <button
          className='block w-full bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-400'
          type='submit'
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
