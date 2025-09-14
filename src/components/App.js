import React, { useState } from "react";
import "./../styles/App.css";
import TodoList from "./TodoList";

// const tasks = [
//   { id: 1, description: "Learn React", complete: false },
//   { id: 2, description: "Build a React app", complete: false },
//   { id: 3, description: "Deploy the React app", complete: false },
// ];
const tasks = [{ id: 1, description: "Learn React", complete: false }];
const App = () => {
  const [todos, setTodos] = useState(tasks);

  function handleComplete(id) {
    setTodos((Prevtodos) =>
      Prevtodos.map((todo) => {
        return todo.id === id ? { ...todo, complete: true } : todo;
      })
    );
  }
  return (
    <div>
      <h1>Parent Component</h1>
      {/* Do not remove the main div */}
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
};

export default App;
