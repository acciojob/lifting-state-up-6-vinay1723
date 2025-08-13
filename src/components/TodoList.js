import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((task) => (
          <li key={task.id} style={{ display: "flex" }}>
            <p style={{ margin: "5px 10px" }}>{task.description}</p>
            {!task.complete && (
              <button onClick={(e) => handleComplete(task.id)}>complete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
