import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Form from "./pages/Form";
import { HashRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Form/>
  </React.StrictMode>
);
