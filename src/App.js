import React, { useState, useMemo } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState(["Learn React", "Learn useMemo"]);

  // Memoize the addTodo function to prevent re-creation
  const addTodo = useMemo(() => {
    return (newTodo) => {
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Memo & useMemo Example</h1>
      <div>
        <h2>Counter: {counter}</h2>
        <button onClick={() => setCounter(counter + 1)}>Increment Counter</button>
      </div>
      <hr />
      <TodoList todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default App;
