import React, { useState } from "react";
import PropTypes from 'prop-types';
import TasksContext from './TasksContext';
import { TASKS_DATA } from "../tasksMock";

function Provider({ children }) {
  const [tasksData, setTasksData] = useState(TASKS_DATA);

  return (
    <TasksContext.Provider
      value={
        {
          tasksData,
          setTasksData,
        }
      }
    >
      { children }
    </TasksContext.Provider>
  );
};

const { node } = PropTypes;

Provider.propTypes = {
  children: node.isRequired,
};

export default Provider;
