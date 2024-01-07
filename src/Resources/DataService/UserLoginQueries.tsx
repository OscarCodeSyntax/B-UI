import axios from "axios";
import { SignInUserType, SignUpUserType } from "../Types/UserLoginTypes";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});

const signUpUser = async (signUpUserInfo: SignUpUserType) => {
  try {
    const response = await apiClient.post<any>(
      "/auth/signup",
      JSON.stringify(signUpUserInfo),
    );
    return response.data;
  } catch (error) {
    console.log(JSON.stringify(signUpUserInfo));
    console.error("signUpUser call failed" + error);
  }
};

const signInUser = async (signInUserInfo: SignInUserType) => {
  try {
    const response = await apiClient.post<any>(
      "/auth/signin",
      JSON.stringify(signInUserInfo),
    );
    return response.data;
  } catch (error) {
    console.error("signInUser call failed" + error);
  }
};

const logout = async () => {
  try {
    const response = await apiClient.get<any>("/auth/logoutSuccess");
    return response.data;
  } catch (error) {
    console.error("logout call failed" + error.response);
  }
};

const deleteUser = async (signInUserInfo: SignInUserType) => {
  const usernameEndpoint: string = "/admin/" + signInUserInfo.username;
  try {
    const response = await apiClient.delete<any>(usernameEndpoint);
    return response.data;
  } catch (error) {
    console.error("deleteUser call failed " + error.response);
  }
};

const UserLoginQueries = {
  signUpUser,
  signInUser,
  logout,
  deleteUser,
};

export default UserLoginQueries;
