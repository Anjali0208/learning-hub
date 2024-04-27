import React from "react";
import { Card, DropdownButton, Dropdown } from "react-bootstrap";
import { IoLibrarySharp } from "react-icons/io5";
import { AiFillNotification } from "react-icons/ai";
import { Link } from "react-router-dom";
import Navbar from "./Dropdown/Navbar";
import "./Card.css";

function Cards() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <Card
          style={{ width: "22rem", height: "18rem" }}
          className="m-3 text-center hover-card"
        >
          <IoLibrarySharp
            className="icon"
            style={{ fontSize: "3rem", padding: "10px" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-5">Course</Card.Title>
            <Card.Subtitle>
              We provide course materials for MCA. We will add other courses
              later.
            </Card.Subtitle>
            <Link
              to="/course"
              className="btn btn-primary mt-3"
              style={{ backgroundColor: "#BC7FCD", border: "none" }}
            >
              <Navbar />
              {/* Explore Courses */}
            </Link>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "22rem", height: "18rem" }}
          className="m-3 text-center hover-card"
        >
          <AiFillNotification
            className="icon"
            style={{ fontSize: "3rem", padding: "10px" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-5">News and Notice</Card.Title>
            <Card.Subtitle>
              Find News and Notice about exams and other events in our notice
              section.
            </Card.Subtitle>
            <a
              href="http://www.ipu.ac.in/notices.php"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
              style={{ backgroundColor: "#BC7FCD", border: "none" }}
            >
              GO
            </a>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "22rem", height: "18rem" }}
          className="m-3 text-center hover-card"
        >
          <AiFillNotification
            className="icon"
            style={{ fontSize: "3rem", padding: "10px" }}
          />
          <Card.Body>
            <Card.Title className="fw-bold fs-5">Result Panel</Card.Title>
            <Card.Subtitle>Find your Result</Card.Subtitle>
            <a
              href="https://www.ipuranklist.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-3"
              style={{ backgroundColor: "#BC7FCD", border: "none" }}
            >
              GO
            </a>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default Cards;
