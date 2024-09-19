// src/pages/TaskList.js
import React from 'react';
import TaskPending from './TaskPending';
import TaskComplite from './TaskComplite';

const TaskList = ({ task, setTask }) => {
  return (
    <div className='w-full h-screen flex flex-col lg:flex-row bg-gray-100'>
      <TaskPending task={task} setTask={setTask} />
      <TaskComplite task={task} setTask={setTask} />
    </div>
  );
};

export default TaskList;
