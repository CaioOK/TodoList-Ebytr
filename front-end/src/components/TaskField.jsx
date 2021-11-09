import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/TaskField.css';

function TaskField({ task, id }) {
  const navigate = useNavigate();

  function handleClickEdit() {
    navigate(`/task-editor/${id}`);
  }

  return(
    <section className='task-field'>
      <p>{ task }</p>
      <div>
        <button
          type='button'
          id='edit-task-btn'
          title='Editar tarefa'
          onClick={ handleClickEdit }
        >
          📝
        </button>
        <button
          type='button'
          id='delete-task-btn'
          title='Excluir tarefa'
        >
          ❌
        </button>
      </div>
    </section>
  );
}

export default TaskField;
