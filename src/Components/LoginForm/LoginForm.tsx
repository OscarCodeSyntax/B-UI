import "./../../App.css";
import { FormControl, FormLabel, TextField } from "@mui/material";
import { SignInUserType } from "../../Resources/Types/UserLoginTypes";
import UserLoginQueries from "../../Resources/DataService/UserLoginQueries";
import Cookies from 'js-cookie'
import React, { useState } from "react";
import ApiButtons from "../ApiButtons/ApiButtons";

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
    console.log(response.id);
    console.log(response.username);
    console.log(response.headers);
  }

  return (
    <div className="padding-20">
      <h1>Login</h1>
      <form className="App" onSubmit={handleSubmit}>
        <FormControl className="padding-10">
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
            type={"submit"}
            defaultValue="Outlined"
            color="secondary"
            value="submit"
            name="submit"
            disabled={!validateForm()}
          />
        </FormControl>
      </form>
      <ApiButtons />
    </div>
  );
}

export default LoginForm;
