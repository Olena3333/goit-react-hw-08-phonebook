import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn, selectUser } from 'redux/auth/selectors';
import { logoutThunk } from 'redux/auth/operations';

import {
  StyledLogouButton,
  StyledLogouWrapper,
  StyledNavbarWrapper,
} from './Navbar.styled';
import styled from 'styled-components';
import { toast } from 'react-toastify';

export const Navbar = () => {
  const { name } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutThunk());
    toast.success(`Goodbye${name}`);
  };

  return (
    <nav>
      <StyledNavbarWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/phonebook">Phonebook</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        {!isLoggedIn && (
          <div>
            <StyledLink to="/login">Log in</StyledLink>
            <StyledLink to="/register">Sign Up</StyledLink>
          </div>
        )}

        {isLoggedIn && (
          <StyledLogouWrapper>
            <p>{name}</p>
            <StyledLogouButton onClick={handleLogout}>
              Log out
            </StyledLogouButton>
          </StyledLogouWrapper>
        )}
      </StyledNavbarWrapper>
    </nav>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 16px;
  font-size: 26px;
  color: white;
  max-height: 42px;
  border-radius: 12px;
  cursor: pointer;
  transition: transform 0.3s ease;
  }
  &.active {
    background-color: white;
    color: black;
    transform: scale(1.05);
  }
`;
