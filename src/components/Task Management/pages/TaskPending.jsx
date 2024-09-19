// src/pages/TaskPending.js
import React from 'react';

const TaskPending = ({ task, setTask }) => {
  const pendingTasks = task.filter(item => !item.complite);

  const handleComplete = (item) => {
    const updatedTasks = task.map(t =>
      t.id === item.id ? { ...t, complite: true } : t
    );
    setTask(updatedTasks);
  };

  return (
    <div className='w-full lg:w-1/2 h-screen bg-gradient-to-br from-red-300 to-yellow-300 p-5 overflow-y-auto'>
      <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Pending Tasks</h2>
      {pendingTasks.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg mb-4 p-5 transition-transform transform hover:scale-105">
          <h1 className='text-red-600 text-xl font-bold mb-2'>{item.heading}</h1>
          <p className='text-gray-700 mb-4'>{item.description}</p>
          <button
            className='bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-400 transition-colors'
            onClick={() => handleComplete(item)}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskPending;
