import React from "react";
import ReactDOM from "react-dom/client";  // Import from 'react-dom/client'
import "./index.css";
import App from "./App";

// Create a root for the application using ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component
root.render(<App />);
