import React, { useState } from 'react';

export default function InputTodo({ addTodo }) {
  const [textTodo, setTextTodo] = useState('');

  const handleChangeTextTodo = (text) => {
    setTextTodo(text);
  };

  const addItem = (value) => {
    addTodo(value);
    setTextTodo('');
  };

  return (
    <section className='InputTodo'>
      <label htmlFor='inputTodo'>
        Tarefa:
        <input
          type='text'
          id='inputTodo'
          value={textTodo}
          onChange={(e) => handleChangeTextTodo(e.target.value)}
        />
      </label>
      <button
        type='button'
        disabled={!textTodo}
        onClick={() => addItem(textTodo)}>
        Adicionar
      </button>
    </section>
  );
}
