import React from "react";
import ReactDOM from "react-dom/client"; // Notice the change here!
import App from "./App";
import "./index.css";

// Create a root element using React 18's new API
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App inside the root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
