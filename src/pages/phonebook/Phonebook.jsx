import React from 'react';

import { ContactForm } from 'components/ContactForm/ContactForm';

import { StyledPhonesWrapper } from './Phonebook.styled';

const Phonebook = () => {
  return (
    <StyledPhonesWrapper>
      <h1>Phonebook</h1>
      <ContactForm />
    </StyledPhonesWrapper>
  );
};
export default Phonebook;
