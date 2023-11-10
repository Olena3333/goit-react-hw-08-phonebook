import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from 'redux/auth/operations';

import {
  StyledRegisterForm,
  StyledRegisterFormWrapper,
  StyledRegisterInput,
  StyledRegisterWrapper,
} from './Register.styled';

export const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    dispatch(registerThunk(data));
  };

  return (
    <StyledRegisterWrapper>
      <StyledRegisterFormWrapper>
        <StyledRegisterForm action="" onSubmit={handleSubmit(submit)}>
          <h2>Registration form</h2>
          <StyledRegisterInput
            type="text"
            {...register('name', { required: true })}
            placeholder="Enter name"
          />
          <StyledRegisterInput
            type="text"
            {...register('email', { required: true })}
            placeholder="Enter email"
          />
          <StyledRegisterInput
            type="text"
            {...register('password', { required: true })}
            placeholder="Enter password"
          />
          <button>Login</button>
        </StyledRegisterForm>
      </StyledRegisterFormWrapper>
    </StyledRegisterWrapper>
  );
};
