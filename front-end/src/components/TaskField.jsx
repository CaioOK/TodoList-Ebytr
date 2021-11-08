import React from 'react';
import '../css/TaskField.css';

function TaskField({ task }) {
  return(
    <section className='task-field'>
      <p>{ task }</p>
      <div>
        <button
          type='button'
          id='edit-task-btn'
          title='Editar tarefa'
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
