import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Store'; // Import your Redux store
import ExampleComponent from './ExampleComponent'; // Import your main component

ReactDOM.render(
  <Provider store={store}>
    <ExampleComponent />
  </Provider>,
  document.getElementById('root')
);