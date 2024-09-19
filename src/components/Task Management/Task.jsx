import React, { useState } from 'react';
import TaskForm from './pages/TaskForm';
import TaskList from './pages/TaskList';

const Task = () => {
  const [task, setTask] = useState([]);

  return (
    <div className='w-full h-screen flex flex-col lg:flex-row'>
      <TaskForm setTask={setTask} task={task} />
      <TaskList setTask={setTask} task={task} />
    </div>
  );
};

export default Task;
