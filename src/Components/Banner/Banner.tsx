import React from "react";
import "../../App.css";
import "./Banner.css";
import LoginLogoutIcon from "../LoginLogoutIcon/LoginLogoutIcon";

function Banner() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <div className="banner flex">
      <div>
        <div className="font-size-50 super-bold-black">B//APP</div>
        <div>Basic UI and DataService</div>
      </div>

      {/* split the content apart on this from left to right */}

      {LoginLogoutIcon(isLoggedIn)}
    </div>
  );
}

export default Banner;
