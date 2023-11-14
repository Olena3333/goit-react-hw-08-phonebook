import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { loginThunk } from 'redux/auth/operations';
import {
  BtnContainerOne,
  ButtonsStyled,
  LinkStyled,
  StyledLabel,
  StyledLoginForm,
  StyledLoginFormWrapper,
  StyledLoginInput,
  StyledLoginWrapper,
} from './Login.styled';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { toast } from 'react-toastify';
import { selectError } from 'redux/sliceContacts';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  const error = useSelector(selectError);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = data => {
    dispatch(loginThunk(data));
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
    <StyledLoginWrapper>
      <BtnContainerOne>
        <ButtonsStyled onClick={handleExit} type="button">
          X
        </ButtonsStyled>
      </BtnContainerOne>
      <StyledLoginFormWrapper>
        <StyledLoginForm action="" onSubmit={handleSubmit(submit)}>
          <h2>Log in</h2>
          <StyledLabel>
            Email:
            <StyledLoginInput
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
            <StyledLoginInput
              autoComplete="on"
              type="password"
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
          <button>Log in</button>
          <p>
            If you don't have an account
            <span>
              <LinkStyled to="/register">Sign Up</LinkStyled>
            </span>
          </p>
        </StyledLoginForm>
      </StyledLoginFormWrapper>
    </StyledLoginWrapper>
  );
};
export default Login;
