import React from 'react';
import AppRoutes from './app.routes';
import LoginRoutes from './login.routes';
import { useSelector } from 'react-redux';

export default function Routes() {
  const selector = useSelector(state => state);

  console.log('Redux Data: ', selector);

  const { authenticated } = selector.login;

  return authenticated ? <AppRoutes /> : <LoginRoutes />;
}
