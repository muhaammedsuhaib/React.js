import React from 'react';
import useLocalStorageState from 'use-local-storage-state';

const Counter = () => {
  // Initialize the state with 'count' and a function to update it
  const [count, setCount] = useLocalStorageState('count', 0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Counter;
