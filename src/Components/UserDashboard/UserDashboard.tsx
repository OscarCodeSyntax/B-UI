import React from "react";
import ApiButtons from "../ApiButtons/ApiButtons";
import { getRoles } from "../../Resources/Helpers/GetRoles";



const  username = localStorage.getItem("username");
const id = localStorage.getItem("id");
const roles = localStorage.getItem("roles");
const cookie = document.cookie;

function UserDashboard() {
  return (
    <>
      <div className="dashboard width-500px margin-5">
        <div className="font-italic font-size-30"><b>USER DASHBOARD</b></div>
        <div className="font-italic font-thin"><b>UserName</b> : {username} </div>
        <div className="font-italic font-thin"><b>Id</b> : {id} </div>
        <div className="font-italic font-thin"><b>Roles</b> : {getRoles(roles)} </div>
        <div className="font-italic font-thin"><b>Cookie</b> : <div className="break-word">{cookie}</div> </div>
      </div>
      <br></br>
      <ApiButtons />
    </>
  );
}

export default UserDashboard;
