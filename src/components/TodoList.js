import React from "react";

export default function TodoList({ items, toggleDone, removeItem }) {
  return (
    <ol>
      {items.map((item) => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.done}
              onChange={() => toggleDone(item.id)}
            />
            <span className={item.done ? "done" : ""}>{item.text}</span>
          </label>
          <button onClick={() => removeItem(item.id)}>X</button>
        </li>
      ))}
    </ol>
  );
}
