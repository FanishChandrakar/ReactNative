import React from 'react';
import MainApp from './src';

import { Provider } from 'react-redux';
import store from './src/redux/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>);
};

export default App;
