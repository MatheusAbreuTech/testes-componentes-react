import { useState } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import Item from './components/Item';

function App() {
  const [listTodo, setListTodo] = useState([]);

  const addTodo = (todo) => {
    setListTodo((state) => [...state, todo]);
  };

  return (
    <main className='App'>
      <InputTodo addTodo={addTodo} />
      <ul>
        {listTodo.map((todo, index) => (
          <li key={index} data-testid='id-item-list'>
            <Item content={todo} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
