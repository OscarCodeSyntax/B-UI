import React from "react";
import ApiButtons from "../ApiButtons/ApiButtons";
import { getRoles } from "../../Resources/Helpers/GetRoles";
import AdminControls from "../AdminControls/AdminControls";

const username = localStorage.getItem("username");
const id = localStorage.getItem("id");
const roles = localStorage.getItem("roles");
const cookie = document.cookie;

function UserDashboard() {
  const userRoles = getRoles(roles);
  console.log(userRoles);
  return (
    <>
      <div className="dashboard width-500px margin-5">
        <div className="font-italic font-size-30">
          <b>USER DASHBOARD</b>
        </div>
        <div className="font-italic font-thin">
          <b>UserName</b> : {username}{" "}
        </div>
        <div className="font-italic font-thin">
          <b>Id</b> : {id}{" "}
        </div>
        <div className="font-italic font-thin">
          <b>Roles</b> : {userRoles}{" "}
        </div>
        <div className="font-italic font-thin">
          <b>Cookie</b> : <div className="break-word">{cookie}</div>{" "}
        </div>
      </div>
      <br></br>
      <ApiButtons />

      {userRoles == "Admin" ? AdminControls() : null}
    </>
  );
}

export default UserDashboard;
