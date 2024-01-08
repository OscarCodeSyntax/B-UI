import * as React from "react";
import "./App.css";
import ApiButtons from "./Components/ApiButtons/ApiButtons";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import LoginForm from "./Components/LoginForm/LoginForm";

const App = () => {
  return (
    <div className="text-center padding-20">
      <h1>API TEMPLATE</h1>
      <RegistrationForm />
      <LoginForm />
    </div>
  );
};

export default App;
