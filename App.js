import { StatusBar } from 'react-native'
import React from 'react';
import { Provider } from 'react-redux';

import store from './src/store'

import Routes from './src/routes'

export default function App() {
  return (
    <Provider store={store} >
      <StatusBar hidden={true} />
      <Routes />
    </Provider>
  );
}
