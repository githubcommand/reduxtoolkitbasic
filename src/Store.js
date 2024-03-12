// store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import apiReducer, { fetchData } from './apiSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
    api: apiReducer,
  },
});

// Dispatch the fetchData thunk to make the initial API call
//store.dispatch(fetchData());

export default store;
