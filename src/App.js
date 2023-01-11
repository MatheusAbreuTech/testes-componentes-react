import React, { useState } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

function App() {
  const [email, setEmail] = useState('');
  const [saveEmail, setSaveEmail] = useState('');

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeSaveEmail = (value) => {
    setSaveEmail(value);
    setEmail('');
  };

  return (
    <div className='App'>
      <label htmlFor='id-email'>
        Email
        <input
          id='id-email'
          type='email'
          value={email}
          onChange={handleChangeEmail}
        />
      </label>

      <input
        id='btn-send'
        type='button'
        data-testid='id-send'
        value='Enviar'
        onClick={() => handleChangeSaveEmail(email)}
      />
      <input id='btn-back' type='button' value='Voltar' />

      <ValidEmail email={saveEmail} />
    </div>
  );
}

export default App;
