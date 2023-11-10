import React, { useEffect } from 'react';

import { Filter } from 'components/Filter/Filter';
import { Notificatio } from 'components/Notificatio/Notificatio';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/sliceContacts';
import { fetchAllContactsThunk } from 'redux/operations';

import { StyledWrapper } from 'components/App.styled';
import ContactList from 'components/ContactList/ContactList';

export const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContactsThunk());
  }, [dispatch]);

  return (
    <StyledWrapper>
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? (
        <ContactList />
      ) : (
        <Notificatio message={'You have no contacts'} />
      )}
    </StyledWrapper>
  );
};
