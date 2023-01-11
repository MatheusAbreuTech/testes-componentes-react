import { useState } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import Item from './components/Item';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addTodo = (todo) => {
    setListTodo((state) => [...state, todo]);
  };

  const removeTodo = (todoIndex) => {
    const newListTodo = listTodo.filter((_, index) => index !== todoIndex);
    setListTodo(newListTodo);
  };

  return (
    <main className='App'>
      <InputTodo addTodo={addTodo} />
      <ul>
        {listTodo.map((todo, index) => (
          <li key={index}>
            <Item content={todo} />
            <button
              type='button'
              name='Remover'
              onClick={() => removeTodo(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
