import React from "react";
import { useForm } from "react-hook-form";
import "./../../App.css";
import { FormControl, FormLabel, TextField } from "@mui/material";
 
function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
 
    const onSubmit = (data:any) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) { // getItem can return actual value or null
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
    };
    
    return (
        <div className="padding-20">
            <h1>Login</h1>
            <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <FormControl className="padding-10">
            <FormLabel>Email</FormLabel>
                <TextField type="email" {...register("email", { required: true })} name='username'/>
                {errors.email && <span style={{ color: "red" }}>
                    *Email* is mandatory </span>}
                    <FormLabel>Password</FormLabel>
                <TextField type="password" {...register("password")} name='password'/>
                <TextField type={"submit"}  defaultValue="Outlined" color="secondary"  value="submit"  name="submit"/>
                </FormControl>
            </form>
        </div>
    );
}
export default LoginForm;