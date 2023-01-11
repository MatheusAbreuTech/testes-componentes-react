import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../components/Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários items na aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post Medium', 'Beber água'];
    render(<App />);

    const btn = screen.getByText('Adicionar');
    const input = screen.getByLabelText('Tarefa:');

    listTodo.forEach((element) => {
      userEvent.type(input, element);
      userEvent.click(btn);

      const currentTask = screen.getByText(element);
      expect(currentTask).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop, ela precisa aparecer na tela', () => {
    const STRING_TASK = 'Realizar CR';
    render(<Item content={STRING_TASK} />);

    expect(screen.getByText(STRING_TASK)).toBeInTheDocument();
  });
});
