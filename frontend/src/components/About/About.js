import React, { useState, useEffect } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

function About() {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (!res.status === 401) {
        throw new Error("Unauthorized User");
      }
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
      navigate("/login");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return <div>About Page</div>;
}

export default About;
