import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';
import {
  StyledLoginForm,
  StyledLoginFormWrapper,
  StyledLoginInput,
  StyledLoginWrapper,
} from './Login.styled';

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    dispatch(loginThunk(data));
    // console.log(data);
  };

  return (
    <StyledLoginWrapper>
      <StyledLoginFormWrapper>
        <StyledLoginForm action="" onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <StyledLoginInput
            type="text"
            {...register('email', { required: true })}
            placeholder="Enter email"
          />
          <StyledLoginInput
            type="text"
            {...register('password', { required: true })}
            placeholder="Enter password"
          />
          <button>Login</button>
        </StyledLoginForm>
      </StyledLoginFormWrapper>
    </StyledLoginWrapper>
  );
};
