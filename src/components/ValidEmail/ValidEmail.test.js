import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '.';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email não tenha sido enviado ainda.', () => {
  render(<ValidEmail email={''} />);
  // Note que utilizamos o 'queryBy' em vez do 'getBy', pois o getBy retorna um erro
  // caso o elemento não seja encontrado, encerrando o teste, já o queryBy retorna null,
  // sendo útil para verificar a não existência de algum elemento na página.
  const isValidText = screen.queryByTestId('message-validate-email');
  expect(isValidText).not.toBeInTheDocument();
});

test('Testando se a cor da mensagem de alerta muda a cor para verde, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('message-validate-email');
  expect(isValidText).toHaveAttribute('class', 'green-text');
});

test('Testando se a cor da mensagem de alerta muda a cor para vermelho, caso o email seja inválido.', () => {
  const EMAIL_USER = 'email@email';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidText = screen.getByTestId('message-validate-email');
  expect(isValidText).toHaveAttribute('class', 'red-text');
});
