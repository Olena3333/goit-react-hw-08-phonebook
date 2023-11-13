import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLoginWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 20px;
  background-color: #000000db;
  border-radius: 6px;
  border: 2px solid white;
  box-shadow: 0px 8px 12px 6px gray;
`;

export const StyledLoginFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12px;
  align-items: center;
  p {
    font-size: 14px;
    color: white;
  }
`;
export const StyledLabel = styled.label`
  font-size: 18px;
  color: white;
`;
export const StyledLoginInput = styled.input`
  font-size: 16px;
  margin-left: 16px;
  padding: 6px;
  border-radius: 8px;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  h2 {
    font-size: 28px;
    text-align: center;
    color: white;
  }
  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    color: white;
  }
  button {
    display: block;
    border-radius: 12px;
    font-size: 16px;
    max-width: 140px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 12px 18px;
  }
`;
export const ButtonsStyled = styled.button`
  width: fit-content;
  text-decoration: none;

  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 50px;
  color: white;
  border: 2px solid wheat;
  justify-content: center;
  border-color: white;
  font-size: 24px;
  background: transparent;
  &:hover {
    color: #00810b;
    border-color: #00810b;
  }
`;
export const BtnContainerOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const LinkStyled = styled(Link)`
  margin-left: 16px;
  font-size: 18px;
  color: white;
  text-decoration: none;
  &:hover {
    color: #00810b;
  }
`;
