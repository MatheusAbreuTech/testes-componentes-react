// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const ValidEmail = ({ email }) => {
  const verifyEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
  };
  return (
    <div>
      <h2 data-testid='id-email-user'>Valor: {email}</h2>
      <h3>{verifyEmail(email) ? 'Email Válido' : 'Email Inválido'}</h3>
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
