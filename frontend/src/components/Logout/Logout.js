import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/login", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="text-center">
            <h1 className="display-4">Oops! Something went wrong.</h1>
            <p className="lead">
              We're sorry, but an error occurred while processing your request.
            </p>
            <p>Please try again later.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
