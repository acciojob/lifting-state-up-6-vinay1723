import React, { useState } from "react";
import TodoList from "./TodoList";
const tasks = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a project", completed: false },
  { id: 3, text: "Practice interview questions", completed: false },
];
// const tasks = [{ id: 1, text: "Learn React", completed: false }];

export default function App() {
  const [todos, setTodos] = useState(tasks);

  // Function to mark a todo as completed
  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList todos={todos} handleComplete={handleComplete} />
    </div>
  );
}
