import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StyledInput = styled.input`
  font-size: 16px;
  margin-left: 16px;
  padding: 6px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 300px;
  margin-top: 30px;
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
  }
`;
