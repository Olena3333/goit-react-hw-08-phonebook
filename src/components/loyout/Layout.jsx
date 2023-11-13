import React from 'react';

import { Navbar } from '../navbar/Navbar';
import { Outlet } from 'react-router-dom';

import { StyledLayoutWrapper } from './Loyout.styled';

const Layout = () => {
  return (
    <div>
      <StyledLayoutWrapper>
        <Navbar />
      </StyledLayoutWrapper>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
