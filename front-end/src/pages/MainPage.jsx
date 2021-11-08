import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import { TASKS_DATA } from '../tasksMock';
import '../css/MainPage.css';
import TasksLobby from '../components/TasksLobby';

function MainPage() {
  const [tasksData, setTasksData] = useState(TASKS_DATA);

  return(
    <div id='main-page'>
      <Header />
      <main id='tasks-lobby'>
        <Routes>
          <Route index element={ <TasksLobby tasksData={ tasksData } /> } />
          <Route path='tasks' element={ <TasksLobby tasksData={ tasksData } /> } />
        </Routes>
      </main>
    </div>
  )
};

export default MainPage;