import React, { useState } from "react";
import { registerUser } from "../../api adapters";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./registrationForm.css";

const Register = (props) => {
  const setIsLoggedIn = props.setIsLoggedIn;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const navToLogin = () => {
    navigate("/login");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const result = await registerUser(username, password);
      console.log(result);

      localStorage.setItem("token", result.token);
      setIsLoggedIn(true);

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="rf-main">
      <div className="rf-slogan">
        <h1 id="rfs-title">Stranger's Things</h1>
        <p id="rfs-text">
          From Unwanted to Irresistible - Find it All on Stranger's Things!
        </p>
      </div>
      <div className="register-form">
        <div id="rf-title-box">
          <h2 id="rf-title">Create An Account:</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              className="rf-label"
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
              className="rf-label"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <button id="rf-button" type="submit">
            <strong>Submit</strong>
          </button>
        </form>
        <div className="rf-line-container">
          <div className="rf-line"></div>
          <p id="rf-or">OR</p>
          <div className="rf-line"></div>
        </div>
        <button id="rf-login" onClick={navToLogin}>
          Log Into An Existing Account
        </button>
      </div>
    </div>
  );
};

export default Register;
