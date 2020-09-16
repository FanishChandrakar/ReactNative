import React from 'react';
import MainApp from './src';

import { Provider } from 'react-redux';
import store from './src/Redux/Store';

export default () => {
  return (
    <Provider {...{ store }}>
      <MainApp />
    </Provider>);
};