import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import RouterError from "./RouterError";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
      errorElement: <RouterError />,

    },
    {
        path: "/login",
        element: <LoginForm />,
        errorElement: <RouterError />,
      },
      {
        path: "*",
        element: <h1>page does not exist</h1>,
        errorElement: <RouterError />,
      },
  ]);


export default Router;