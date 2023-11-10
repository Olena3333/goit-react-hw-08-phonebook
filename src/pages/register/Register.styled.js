import styled from 'styled-components';

export const StyledRegisterWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 30px;
  background-color: #000000db;
  border-radius: 6px;
  border: 2px solid white;
  box-shadow: 0px 8px 12px 6px gray;
`;

export const StyledRegisterFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledRegisterInput = styled.input`
  font-size: 16px;
  margin-left: 16px;
  padding: 6px;
`;

export const StyledRegisterForm = styled.form`
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
    font-size: 16px;
    max-width: 140px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px 16px;
  }
`;
