import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Link className="/">
        <img
          className="header_logo"
          src={require("../images/clgLogo.png")}
          alt="logo"
        />
      </Link>
      <div style={{ paddingRight: "20px", paddingTop: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          BCIIT
        </Link>
      </div>

      <div className="links">
        <Link
          to="/about"
          style={{
            justifyContent: "space-evenly",
            color: "white",
            textDecoration: "none",
          }}
        >
          About
        </Link>
      </div>

      <div className="links">
        <Link
          to="/login"
          style={{
            justifyContent: "space-evenly",
            color: "white",
            textDecoration: "none",
          }}
        >
          Login
        </Link>
      </div>

      <div className="links">
        <Link
          to="/signup"
          style={{
            justifyContent: "space-evenly",
            color: "white",
            textDecoration: "none",
          }}
        >
          Register
        </Link>
      </div>

      <div className="links">
        <Link
          to="/about"
          style={{
            justifyContent: "space-evenly",
            color: "white",
            textDecoration: "none",
          }}
        >
          Chatting
        </Link>
      </div>
    </div>
  );
}

export default Header;
