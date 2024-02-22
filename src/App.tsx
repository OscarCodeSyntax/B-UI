import "./App.css";
import { RouterProvider } from "react-router-dom";
import React from "react";
import Banner from "./Components/Banner/Banner";
import RouterController from "./Routes/Router";

const App = () => {
  return (
    <React.StrictMode>
      <Banner />
      <RouterProvider router={RouterController} />
    </React.StrictMode>
  );
};

export default App;
