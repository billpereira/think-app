import React, { useState } from "react";
import logo from "../logo-login.png";
import api from "../services/api";
import { useHistory } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = async () => {
    const data = { username, password };

    try {
      const response = await api.post("api/login", data);
      localStorage.setItem("auth", response.data.auth);
      response.data.auth
        ? history.push("/groups")
        : alert("User or Password Invalid");
    } catch (error) {
      alert("Login Failed");
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <div className="row">
          <img className="login-logo" src={logo} alt="logo" />
        </div>
        <div className="row">
          <div className="box-login">
            <div className="box-row">
              User:
              <input
                type="text"
                placeholder="your id"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              ></input>
            </div>
            <div className="box-row">
              Password:
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="box-row">
              <button
                // type="submit"
                className="login-button"
                onClick={() => handleLogin()}
              >
                LOGIN
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
