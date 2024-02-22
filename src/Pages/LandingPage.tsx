import React from "react";
import UserDashboard from "../Components/UserDashboard/UserDashboard";
import LoginForm from "../Components/LoginForm/LoginForm";

function LandingPage(isLoggedIn: boolean) {
  return isLoggedIn ? <UserDashboard /> : <LoginForm />;
}

export default LandingPage;
