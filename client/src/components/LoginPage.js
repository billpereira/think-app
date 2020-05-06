import React from "react";
import logo from "../logo-login.png";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <div>
      <div className="row">
        <img className="login-logo" src={logo} alt="logo" />
      </div>
      <div className="row">
        <div className="box-login">
          <div className="box-row">
            User:<input type="text"></input>
          </div>
          <div className="box-row">
            Password:<input type="password"></input>
          </div>
          <div className="box-row">
            <button className="login-button">LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
