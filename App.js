import React from 'react';
import MainApp from './src';

import { Provider } from 'react-redux';
import store from './src/redux/store';

export default () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>);
};