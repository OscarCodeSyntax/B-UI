import FormControl from "@mui/material/FormControl";
import React from "react";
import "../../App.css";
import { FormLabel, Input, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

// <input type="text" />
// <input type="email" />
// <input type="password" />
// <input type={"submit"}
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const onSubmit = (data : any) => {
    localStorage.setItem(data.email, JSON.stringify({ 
        name: data.name, password: data.password 
    }));
    console.log(JSON.parse(localStorage.getItem(data.email)));
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration</h1>
        <FormControl >
        <FormLabel>User Name</FormLabel>
          <TextField type="text" color="secondary" {...register("name")} />
          <FormLabel>Email</FormLabel>
          <TextField
            type="email"
            color="secondary"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span style={{ color: "red" }}>*Email* is mandatory </span>
          )}
            <FormLabel>Password</FormLabel>
          <TextField
            type="password"
            defaultValue="Outlined"
            color="secondary"
            {...register("password")}
          />
          <TextField type="submit" defaultValue="Outlined" color="secondary" />
        </FormControl>
      </form>
    
  );
};

export default RegistrationForm;
