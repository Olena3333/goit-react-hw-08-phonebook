import React from 'react';

import img from '../../img/404-page-not-found.png';

import { StyledNotFoundImg, StyledNotFoundWrapper } from './NotFound.styled';
export const NotFound = () => {
  return (
    <StyledNotFoundWrapper>
      <h1>Not found! 404</h1>
      <StyledNotFoundImg src={img} alt="404" />
    </StyledNotFoundWrapper>
  );
};
