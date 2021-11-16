import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import TasksContext from '../context/TasksContext';
import '../css/TaskEditor.css';

function TaskEditor() {
  const { taskId } = useParams();
  const { tasksData, setTasksData } = useContext(TasksContext);
  const taskFound = tasksData.find((task) => task['_id'] === taskId);
  const isEditingATask = taskFound ? true : false; // True para logica de editar, false para lógica de criar;
  const taskText = taskFound ? taskFound.task : '';
  const [textAreaValue, setTextAreaValue] = useState(taskText);
  const [saved, setSaved] = useState(false);

  console.log('taskId: ', taskId, 'taskText: ', taskText, 'textArea: ', textAreaValue);
  
  function handleChange({ target: { value } }) {
    setTextAreaValue(value);
  }

  function handleClickSaveBtn() {
    const tasksDataCopy = [...tasksData];
    setSaved(true);

    if (isEditingATask) {
      const taskIndex = tasksData.findIndex((task) => task['_id'] === taskId);
      tasksDataCopy[taskIndex] = { ...taskFound, task: textAreaValue }
      return setTasksData(tasksDataCopy);
    }

    tasksDataCopy.push({
      _id: JSON.stringify(Math.random()),
      task: textAreaValue,
      status: 'pending',
    });

    setTasksData(tasksDataCopy);
  }

  return (
    <section id='task-editor'>
      <form>
        <textarea
          spellCheck='false'
          maxLength='300'
          placeholder='Escreva sua tarefa aqui...'
          value={ textAreaValue }
          onChange={ (event) => handleChange(event) }
        >
        </textarea>
        <button
          type='button'
          title='Salvar'
          onClick={ handleClickSaveBtn }
        >
          Salvar
        </button>
        <span>{ saved ? 'Tarefa salva com sucesso!' : '' }</span>
      </form>
    </section>
  );
}

export default TaskEditor;
