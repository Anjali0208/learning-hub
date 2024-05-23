import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  // Assuming isLoggedIn is a state that determines whether the user is logged in or not
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout functionality, e.g., clear local storage, update state, etc.
    setIsLoggedIn(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#86469C" }}
    >
      <div className="container">
        <Link className="navbar-brand text-light" to="/">
          <img
            className="header_logo"
            src={require("../images/clgLogo.png")}
            alt="logo"
          />
          easyNote
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-light" to="/about">
                About
              </Link>
            </li>
            {/* Conditional rendering for login/register or logout */}
            {!isLoggedIn ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/register">
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <li className="nav-item">
                <button
                  className="btn btn-link text-light"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            )}
            {/* End of conditional rendering */}
            <li className="nav-item">
              <Link className="nav-link text-light" to="/chatting">
                Chatting
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light" to="/logout">
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
