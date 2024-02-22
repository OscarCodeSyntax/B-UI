import { Login, Logout } from "@mui/icons-material";
import React from "react";
import isLoggedInConverter from "../../Resources/Helpers/IsLoggedInConverter";
import HandleLogout from "../../Resources/Helpers/HandleLogout";

function LoginLogoutIcon(isLoggedIn: string) {
  const LoginLogoutIcon = isLoggedInConverter(isLoggedIn) ? (
    <div className="split padding-20">
      <a
        className="flex color-black"
        href="/"
        onClick={(e: any) => HandleLogout(e)}
      >
        <div>
          <div className="margin-5"> Logout</div>
        </div>
        <Logout fontSize="large" className="margin-login" />
      </a>
    </div>
  ) : (
    <div className="split padding-20">
      <a
        className="flex color-black"
        href="/"
        onClick={(e: any) => HandleLogout(e)}
      >
        <div>
          <div className="margin-5"> Login</div>
        </div>
        <Login fontSize="large" className="margin-login " />
      </a>
    </div>
  );

  return LoginLogoutIcon;
}

export default LoginLogoutIcon;
