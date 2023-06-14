import React, { useState } from "react";
import { loginUser } from "../../api adapters";
import { useNavigate } from "react-router-dom";

import "./loginForm.css";

const Login = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navToRegister = () => {
    navigate("/register");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await loginUser(username, password);
      console.log(result);

      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="lf-main">
      <div className="lf-slogan">
        <h1 id="lfs-title">Stranger's Things</h1>
        <p id="lfs-text">
          From Unwanted to Irresistible - Find it All on Stranger's Things!
        </p>
      </div>
      <div className="login-form">
        <div id="lf-title-box">
          <h2 id="lf-title">Log Into A Account:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="lf-label"
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            <input
              className="lf-label"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <button id="lf-button" type="submit">
            <strong>Submit</strong>
          </button>
        </form>
        <div className="lf-line-container">
          <div className="lf-line"></div>
          <p id="lf-or">OR</p>
          <div className="lf-line"></div>
        </div>
        <button id="lf-login" onClick={navToRegister}>
          Create A New Account
        </button>
      </div>
    </div>
  );
};

export default Login;
