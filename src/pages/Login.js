import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useFormAction, useNavigate } from 'react-router-dom';
import { loginThunk } from 'redux/auth/operations';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = data => {
    dispatch(loginThunk(data));
    // console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        {...register('email', { required: true })}
        placeholder="Enter email"
      />
      <input
        type="text"
        {...register('password', { required: true })}
        placeholder="Enter password"
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
