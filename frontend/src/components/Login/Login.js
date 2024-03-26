import React, { useState } from "react";
import { Link } from "react-router-dom";
import login_illustration from "../../asset/images/login_llustration.png";
import background_login from "../../asset/images/background_login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passEmpty, setPassEmpty] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // const check = "/^[w-.]+@([w-]+.)+[w-]{2,4}$/g";
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString, // getTime will return a number that's why we convert that into a string
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      console.log(newEntry);
      setEmail("");
      setPassword("");
      setEmailEmpty(false);
      setPassEmpty(false);
    } else if (email == "") {
      setEmailEmpty(true);
    } else if (password == "") {
      setPassEmpty(true);
    }
  };

  return (
    // background color
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
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // autoComplete="off"
                    />
                    {emailEmpty ? (
                      <div className=" alert-danger mb-2" role="alert">
                        Field can't be empty.
                      </div>
                    ) : (
                      <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                      </div>
                    )}
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
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  {passEmpty ? (
                    <div className=" alert-danger mb-2" role="alert">
                      Field can't be empty.
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="mb-3">
                    Already have an account? <Link to="/signup">signup</Link>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-dark w-100"
                    style={{ color: "pink", background: "#C147E9" }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div>
              {allEntry.map((currEntry) => {
                // object destructuring
                const { id, email, password } = currEntry;
                return (
                  <div key={id}>
                    <p>{email}</p>
                    <p>{password}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
