import React, { useState } from "react";
import "./App.css";
import initialTodos from "./data/initialTodos";
import TodoList from "./components/TodoList";

export default function App() {
  const [items, setItems] = useState(initialTodos);

  const toggleDone = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList items={items} toggleDone={toggleDone} removeItem={removeItem} />
    </div>
  );
}
