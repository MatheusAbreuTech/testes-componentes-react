import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

describe('Testando a aplicação, testando o botão e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const btn = screen.getByText('Adicionar');
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveAttribute('type', 'button');
  });

  test('Testar a funcionalidade de adicionar uma tarefa na lista', () => {
    render(<App />);
    const TEXT_TODO = 'efetuar testes';

    const btnAdd = screen.getByText('Adicionar');
    const input = screen.getByLabelText('Tarefa:');
    expect(screen.queryByText(TEXT_TODO)).not.toBeInTheDocument();
    expect(input).toBeInTheDocument();

    userEvent.type(input, TEXT_TODO);
    userEvent.click(btnAdd);
    expect(input).toHaveValue('');
    expect(screen.getByText(TEXT_TODO)).toBeInTheDocument();
  });
});
