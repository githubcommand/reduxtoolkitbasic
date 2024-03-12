// ExampleComponent.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { addTodo, removeTodo } from './todoSlice';
import { fetchData } from './apiSlice';

const ExampleComponent = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const todos = useSelector((state) => state.todos);
  const apiData = useSelector((state) => state.api.data);
  const apiLoading = useSelector((state) => state.api.loading);
  const apiError = useSelector((state) => state.api.error);

  return (
    <div>
      <h2>Counter: {counter}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <h2>Todos:</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{' '}
            <button onClick={() => dispatch(removeTodo(todo.id))}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => dispatch(addTodo({ id: Date.now(), title: 'New Todo' }))}>
        Add Todo
      </button>

      <h2>API Data:</h2>
      {apiLoading && <p>Loading...</p>}
      {apiData && <p>{JSON.stringify(apiData)}</p>}
      {apiError && <p>Error: {apiError}</p>}

      <button onClick={() => dispatch(fetchData())}>Fetch API Data</button>
    </div>
  );
};

export default ExampleComponent;
