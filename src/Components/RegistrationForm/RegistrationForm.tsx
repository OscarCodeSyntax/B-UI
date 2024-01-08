import FormControl from "@mui/material/FormControl";
import React, { useState } from "react";
import "../../App.css";
import { FormLabel, TextField } from "@mui/material";
import { SignUpUserType } from "../../Resources/Types/UserLoginTypes";
import UserLoginQueries from "../../Resources/DataService/UserLoginQueries";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const [email, setEmail] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0 && email.length;
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let loginInformation: SignUpUserType = {
      username: username,
      email: email,
      roles: [],
      password: password,
    };
    // send the username and password to the API
    const response = await UserLoginQueries.signUpUser(loginInformation);
    // store the user in localStorage
    localStorage.setItem("username", response.username);
    localStorage.setItem("id", response.id);
    console.log(response.id);
    console.log(response.username);
    console.log(response.headers);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <FormControl>
        <FormLabel>User Name</FormLabel>
        <TextField
          type="username"
          color="secondary"
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          value={username}
        />
        <FormLabel>Email</FormLabel>
        <TextField
          type="email"
          color="secondary"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          value={email}
        />
        <FormLabel>Password</FormLabel>
        <TextField
          type="password"
          defaultValue="Outlined"
          color="secondary"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          value={password}
        />
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
  );
};

export default RegistrationForm;
