import React, { useState } from "react";
import { Link } from "react-router-dom";
import login_illustration from "../../asset/images/login_llustration.png";
import background_login from "../../asset/images/background_login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you can add your login logic
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    // background color
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background_login})`, // Set the image as background
        backgroundSize: "cover", // Cover the entire container
        backgroundPosition: "center", // Center the background image
      }}
    >
      <div className="d-flex justify-content-center">
        <div
          className="container shadow-lg"
          style={{
            maxWidth: "800px",
            padding: "0",
            margin: "50px auto 0", // Adjusted margin to move the container higher
            borderRadius: "15px", // Added border-radius for rounding the container
          }}
        >
          <div className="row mx-0">
            {/* Illustration */}
            <div className="col-md-6 d-flex align-items-center justify-content-center px-0">
              <img
                src={login_illustration}
                alt="Illustration"
                style={{ width: "100%", height: "auto" }}
              />
            </div>

            {/* Login credentials */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center px-0"
              style={{ background: "#FFD0EC", borderRadius: "15px" }}
            >
              <div className="p-3 w-100">
                <h2 className="text-center mb-3">Login</h2>
                <form>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control rounded-pill"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control rounded-pill"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3">
                    Didn't have an account? <Link to="/signup">signup</Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark rounded-pill w-100"
                    style={{ color: "pink", background: "#C147E9" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
