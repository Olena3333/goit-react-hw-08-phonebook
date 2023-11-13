import React from 'react';

import { StyledHomeWrapper } from './Home.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';

export const Home = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  if (isLoggedIn) {
    return (
      <StyledHomeWrapper>
        <h1>Phonebook</h1>
        <p>Welcome {name}</p>
      </StyledHomeWrapper>
    );
  }
  return (
    <StyledHomeWrapper>
      <h1>Phonebook</h1>
      <p>Please log in ...</p>
    </StyledHomeWrapper>
  );
};
export default Home;
