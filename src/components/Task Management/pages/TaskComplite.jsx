import React, { useEffect, useState } from 'react';

const TaskComplite = ({ task, setTask }) => {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const filteredTasks = task.filter(item => item.complite === true);
    setCompletedTasks(filteredTasks);
  }, [task]);

  const handleMarkAsNotComplete = (item) => {
    const updatedTasks = task.map(t =>
      t.id === item.id ? { ...t, complite: false } : t
    );
    setTask(updatedTasks);
  };

  return (
    <div className='w-full h-screen bg-green-200 p-5 overflow-y-auto'>
      {completedTasks.map((item) => (
        <div key={item.id} className="shadow-xl bg-white rounded-xl text-center mb-5 p-5">
          <h1 className='text-red-500 text-2xl'>{item.heading}</h1>
          <p>{item.description}</p>
          <button
            className='bg-red-500 rounded-xl p-2 hover:bg-red-400'
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
