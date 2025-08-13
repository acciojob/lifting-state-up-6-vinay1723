import React from "react";

export default function TodoList({ todos, handleComplete }) {
  return (
    <div>
      <h2>Child Component</h2>
      <ul>
        {todos.map((task) => (
          <div key={task.id} style={{ display: "flex", gap: "10px" }}>
            <li>{task.description}</li>
            {!task.complete && (
              <button onClick={(e) => handleComplete(task.id)}>Complete</button>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
}

