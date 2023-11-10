import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/phonebook">Phonebook</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>
      </nav>
    </div>
  );
};
