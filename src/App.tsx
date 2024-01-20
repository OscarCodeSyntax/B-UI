import * as React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";

const App = () => {
  return (
    <React.StrictMode>
    <RouterProvider router={Router} />
    </React.StrictMode>
  );
};

export default App;
