import React from 'react';
import TaskField from './TaskField';

function TasksLobby({ tasksData }) {
  return (
    <>
      { tasksData.map(({ task, _id }) => <TaskField key={ _id } task={ task } /> ) }
    </>
  );
}

export default TasksLobby;
