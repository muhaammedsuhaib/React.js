import React from 'react';

const TaskPending = ({ task, setTask }) => {
  const pendingTasks = task.filter(item => item.complite === false);

  const handleComplete = (item) => {
    const updatedTasks = task.map(t =>
      t.id === item.id ? { ...t, complite: true } : t
    );
    setTask(updatedTasks);
  };

  return (
    <div className='w-full h-screen bg-red-200 p-5 overflow-y-auto'>
      {pendingTasks.map((item) => (
        <div key={item.id} className="shadow-xl bg-white rounded-xl text-center mb-5 p-5">
          <h1 className='text-red-500 text-2xl'>{item.heading}</h1>
          <p>{item.description}</p>
          <button
            className='bg-green-500 rounded-xl p-2 hover:bg-green-400'
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
