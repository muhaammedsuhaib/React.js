// src/pages/TaskComplite.js
import React, { useEffect, useState } from 'react';

const TaskComplite = ({ task, setTask }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = task.filter(item => item.complite);
    setCompletedTasks(filteredTasks);
  }, [task]);

  const handleMarkAsNotComplete = (item) => {
    const updatedTasks = task.map(t =>
      t.id === item.id ? { ...t, complite: false } : t
    );
    setTask(updatedTasks);
  };

  return (
    <div className='w-full lg:w-1/2 h-screen bg-gradient-to-br from-green-300 to-blue-300 p-5 overflow-y-auto'>
      <h2 className='text-2xl font-semibold mb-4 text-gray-800'>Completed Tasks</h2>
      {completedTasks.map((item) => (
        <div key={item.id} className="bg-white rounded-lg shadow-lg mb-4 p-5 transition-transform transform hover:scale-105">
          <h1 className='text-blue-600 text-xl font-bold mb-2'>{item.heading}</h1>
          <p className='text-gray-700 mb-4'>{item.description}</p>
          <button
            className='bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-400 transition-colors'
            onClick={() => handleMarkAsNotComplete(item)}
          >
            Mark as Not Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskComplite;
