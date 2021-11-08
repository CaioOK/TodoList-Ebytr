import React, { useState } from 'react'
import '../css/Header.css';

function Header() {
  const initialChecked = {
    alphabetical: false,
    date: false,
    status: false,
  };
  const [statusCheckboxes, setStatusCheckboxes] = useState(initialChecked);

  function handleChange({ target : { name, checked } } ) {
    setStatusCheckboxes({ ...initialChecked, [name]: checked });
  }

  return(
    <header id='main-header'>
      <form id='sort-form'>
        <span>Ordenar por:</span>

        <label htmlFor='alphabetical-order-checkbox'>
          <input
            type='checkbox'
            id='alphabetical-order-checkbox'
            name='alphabetical'
            checked={ statusCheckboxes.alphabetical}
            onChange={ (event) => handleChange(event) }
          />
          Ordem Alfabética
        </label>

        <label htmlFor='date-checkbox'>
          <input
            type='checkbox'
            id='date-checkbox'
            name='date'
            checked={ statusCheckboxes.date}
            onChange={ (event) => handleChange(event) }
          />
          Data
        </label>

        <label htmlFor='status-checkbox'>
          <input
            type='checkbox'
            id='status-checkbox'
            name='status'
            checked={ statusCheckboxes.status}
            onChange={ (event) => handleChange(event) }
          />
          Status
        </label>
      </form>

      <form id='search-bar-form'>
        <div>
          <input type='button' id='new-task-btn' value='Nova Tarefa' />
          <input type='button' id='show-tasks-btn' value='Listar Tarefas' />
        </div>

        <div>
          <input type='text' id='search-bar' placeholder='Pesquisar' />
          <input type='button' id='search-btn' value='🔍' />
        </div>
      </form>
    </header>
  )
}

export default Header;