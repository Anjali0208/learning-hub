import React, { useState } from "react";
import { Link } from "react-router-dom";
import login_illustration from "../../asset/images/login_llustration.png";
import background_login from "../../asset/images/background_login.png";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassoword, setconfirmPassoword] = useState("");
  const [phone, setPhone] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const handleRegister = (e) => {
    e.preventDefault();

    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      console.log(newEntry);
      setEmail("");
      setPassword("");
      setPhone("");
      setName("");
      setconfirmPassoword("");
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background_login})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="d-flex justify-content-center">
        <div
          className="container shadow-lg"
          style={{
            maxWidth: "800px",
            padding: "0",
            margin: "20px auto 50px", // Adjusted margin to move the container above
            borderRadius: "15px",
          }}
        >
          <div className="row mx-0">
            {/* Registration Form */}
            <div
              className="col-md-6 d-flex align-items-center justify-content-center px-0"
              style={{ background: "#FFD0EC", borderRadius: "15px" }}
            >
              <div className="p-3 w-100">
                <h2 className="text-center mb-3">Register</h2>
                <form onSubmit={handleRegister}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="num" className="form-label">
                      Phone number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="num"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="correctpassword" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirm"
                      value={confirmPassoword}
                      onChange={(e) => confirmPassoword(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    Already have an account? <Link to="/login">Login</Link>
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

            {/* Illustration */}
            <div className="col-md-6 d-flex align-items-center justify-content-center px-0">
              <img
                src={login_illustration}
                alt="Illustration"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
