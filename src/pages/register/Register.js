import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { registerThunk } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { selectError } from 'redux/sliceContacts';

import {
  BtnContainerOne,
  ButtonsStyled,
  LinkStyled,
  StyledLabel,
  StyledRegisterForm,
  StyledRegisterFormWrapper,
  StyledRegisterInput,
  StyledRegisterWrapper,
} from './Register.styled';
import { toast } from 'react-toastify';

export const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const error = useSelector(selectError);
  const submit = data => {
    dispatch(registerThunk(data));
    reset();
  };
  const handleExit = () => {
    navigate('/');
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return (
    <StyledRegisterWrapper>
      <BtnContainerOne>
        <ButtonsStyled onClick={handleExit} type="button">
          X
        </ButtonsStyled>
      </BtnContainerOne>
      <StyledRegisterFormWrapper>
        <StyledRegisterForm action="" onSubmit={handleSubmit(submit)}>
          <h2>Registration form</h2>
          <StyledLabel>
            Name:
            <StyledRegisterInput
              type="text"
              {...register('name', {
                required: true,
                minLength: {
                  value: 3,
                  message: 'Name should be at least 3 characters',
                },
              })}
              placeholder="Enter name"
            />
            {errors?.name && <div>{errors.name.message}</div>}
          </StyledLabel>
          <StyledLabel>
            Email:
            <StyledRegisterInput
              type="email"
              {...register('email', {
                required: true,
                minLength: {
                  value: 6,
                  message: 'Email should be at least 6 characters',
                },
              })}
              placeholder="Enter email"
            />
            {errors?.email && <div>{errors.email.message}</div>}
          </StyledLabel>
          <StyledLabel>
            Password:
            <StyledRegisterInput
              type="password"
              autoComplete="on"
              {...register('password', {
                required: true,
                minLength: {
                  value: 7,
                  message: 'Password should be at least 7 characters',
                },
              })}
              placeholder="Enter password"
            />
            {errors?.password && <div>{errors.password.message}</div>}
          </StyledLabel>
          <button to="/" type="submit">
            Sign up
          </button>
          <p>
            If you already have an account
            <span>
              <LinkStyled to="/login">Log in</LinkStyled>
            </span>
          </p>
        </StyledRegisterForm>
      </StyledRegisterFormWrapper>
    </StyledRegisterWrapper>
  );
};
export default Register;
