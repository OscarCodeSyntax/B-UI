import React from "react";
import LoginForm from "../Components/LoginForm/LoginForm";
import RouterError from "./RouterError";
import { createBrowserRouter } from "react-router-dom";
import "../App.css";
import RegistrationForm from "../Components/RegistrationForm/RegistrationForm";
import { Link } from "@mui/material";
import LandingPage from "../Pages/LandingPage";
import isLoggedInConverter from "../Resources/Helpers/IsLoggedInConverter";

const isLoggedIn = localStorage.getItem("isLoggedIn");
console.log("User is logged in : " + isLoggedIn);
let isLoggedInBoolean = isLoggedInConverter(isLoggedIn);


const Router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="padding-20">
        {LandingPage(isLoggedInBoolean)}
      </div>
    ),
    errorElement: <RouterError />,
  },
  {
    path: "/login",
    element: (
      <div className="padding-20">
        <LoginForm />
      </div>
    ),
    errorElement: <RouterError />,
  },
  {
    path: "/register",
    element: (
      <div className="padding-20">
        <RegistrationForm />
      </div>
    ),
    errorElement: <RouterError />,
  },
  {
    path: "*",
    element: (
      <div className="padding-20">
        <h2>This page does not exist</h2>{" "}
        <Link href="/" variant="body2" >
          Return to Home Page
        </Link>
      </div>
    ),
    errorElement: <RouterError />,
  },
]);

export default Router;
