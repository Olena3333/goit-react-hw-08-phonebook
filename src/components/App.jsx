import { Route, Routes } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from 'pages/home/Home';
import Phonebook from 'pages/phonebook/Phonebook';
import Contacts from 'pages/contacts/Contacts';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import NotFound from 'pages/notFound/NotFound';
import Layout from './loyout/Layout';
import Loading from './loading/Loading';

import { selectRefresh } from 'redux/auth/selectors';
import { refreshThunk } from 'redux/auth/operations';
import { PrivateRoute } from 'hoc/PrivateRoute';
import PublicRoute from 'hoc/PublicRoute';
import Loader from './Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  const refresh = useSelector(selectRefresh);
  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  debugger;
  return refresh ? (
    <Loader />
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Loading />}>
            <Layout />
          </Suspense>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="/phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
