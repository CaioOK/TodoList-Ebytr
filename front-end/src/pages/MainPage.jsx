import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import '../css/MainPage.css';
import TasksLobby from '../components/TasksLobby';
import TasksContext from '../context/TasksContext';
import TaskEditor from '../components/TaskEditor';

function MainPage() {
  const { tasksData } = useContext(TasksContext);

  return(
    <div id='main-page'>
      <Header />
      <main id='tasks-lobby'>
        <Routes>
          <Route index element={ <TasksLobby tasksData={ tasksData } /> } />
          <Route path='task-editor/:taskId' element={ <TaskEditor /> } />
        </Routes>
      </main>
    </div>
  )
};

export default MainPage;