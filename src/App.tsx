import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import React from "react";

const App = () => {
  return (
    <React.StrictMode>
    <RouterProvider router={Router} />
    </React.StrictMode>
  );
};

export default App;
