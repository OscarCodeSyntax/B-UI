import "./../../App.css";
import { FormControl, FormLabel, Link, TextField } from "@mui/material";
import { SignInUserType } from "../../Resources/Types/UserLoginTypes";
import UserLoginQueries from "../../Resources/Queries/UserLoginQueries";
import { useState } from "react";
import React from "react";

function LoginForm() {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();

    let loginInformation: SignInUserType = {
      username: username,
      password: password,
    };
    // send the username and password to the API
    const response = await UserLoginQueries.signInUser(loginInformation);
    // store the user in localStorage
    localStorage.setItem("username", response.username);
    localStorage.setItem("id", response.id);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("roles", response.roles);
    window.location.reload();
  }

  return (
    <>
      <h2>Login</h2>
      <form className="App" onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <TextField
            type="username"
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            value={username}
          />
          <FormLabel>Password</FormLabel>
          <TextField
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            value={password}
          />
          <br></br>
          <TextField
            aria-label="Submit button"
            type={"submit"}
            defaultValue="Outlined"
            color="secondary"
            disabled={!validateForm()}
          />
          <Link
            href="/register"
            variant="body2"
            className="padding-10 text-center"
          >
            Click to register
          </Link>
        </FormControl>
      </form>
    </>
  );
}

export default LoginForm;
