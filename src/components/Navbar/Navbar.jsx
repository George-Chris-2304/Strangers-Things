import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  console.log(isLoggedIn);
  return (
    <div className="Navbar">
      <div className="Navbar-inner">
        {isLoggedIn ? (
          <>
            <Link className="Navbar-link" to="/">
              Home{" "}
            </Link>
            <button
              id="logout"
              className="Navbar-link"
              onClick={() => {
                setIsLoggedIn(false);
                localStorage.removeItem("token");
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="Navbar-link" to="/">
              Home{" "}
            </Link>
            <Link className="Navbar-link" to="/register">
              Register{" "}
            </Link>
            <Link className="Navbar-link" to="/login">
              Login{" "}
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
