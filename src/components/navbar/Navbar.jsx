import React from 'react';
import { NavLink } from 'react-router-dom';

import { StyledNavbarWrapper } from './Navbar.styled';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <nav>
      <StyledNavbarWrapper>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/phonebook">Phonebook</StyledLink>
        <StyledLink to="/contacts">Contacts</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <StyledLink to="/register">Register</StyledLink>
      </StyledNavbarWrapper>
    </nav>
  );
};

const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 16px;
  font-size: 26px;
  color: white;
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
