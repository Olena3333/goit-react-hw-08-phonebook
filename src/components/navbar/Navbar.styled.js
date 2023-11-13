import styled from 'styled-components';

export const StyledNavbarWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
`;
export const StyledLogouWrapper = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 0 40px;
  background-color: #3e3939db;
  border-radius: 12px;
  p {
    font-size: 26px;
    color: white;
  }
`;
export const StyledLogouButton = styled.button`
  display: block;

  border-radius: 4px;
  border: none;
  font-size: 26px;
  max-height: 42px;
  background-color: #3e3939db;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover:not(:disabled) {
    background-color: #091ec2;
    color: white;
  }
  &:disabled {
    background-color: #d7dcff;
  }
`;
