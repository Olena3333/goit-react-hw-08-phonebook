import { StyledWrapper } from 'components/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import React from 'react';

export const Phonebook = () => {
  return (
    <StyledWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
    </StyledWrapper>
  );
};
