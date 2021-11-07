import '../css/Header.css';

function Header() {
  return(
    <header id='main-header'>
      <form id='sort-form'>
        <span>Ordenar por:</span>

        <label htmlFor='alphabetical-order-checkbox'>
          <input type='checkbox' id='alphabetical-order-checkbox' />
          Ordem Alfabética
        </label>

        <label htmlFor='date-checkbox'>
          <input type='checkbox' id='date-checkbox' />
          Data
        </label>

        <label htmlFor='status-checkbox'>
          <input type='checkbox' id='status-checkbox' />
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