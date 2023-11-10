import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { Home } from 'pages/Home';
import { Phonebook } from 'pages/Phonebook';
import { Contacts } from 'pages/Contacts';
import { NotFound } from 'pages/NotFound';
import { Register } from 'pages/Register';
import { Login } from 'pages/Login';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="phonebook" element={<Phonebook />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};
