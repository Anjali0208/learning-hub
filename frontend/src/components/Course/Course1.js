import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header'
import "./Course.css"
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Course1() {

    return (
        <>
            <div className='course'>
                <h1>
                    MCA Course
                </h1>
                <p>These are all the courses in MCA course offered by IPU.</p>

                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>First Semester</h3>
                    <Col>

                        <li><Link to="/ds" className='sub'>Discrete Structure</Link></li>
                        <li><Link to="/cn" className="sub">Computer Networks</Link></li>
                        <li><Link to="/os" className='sub'>Operating Systems with Linux</Link></li>
                        <li> <Link to="/java_lab" className='sub'>Object Oriented Programming and JAVA Lab</Link></li>

                    </Col>

                    <Col>

                        <li><Link to="/dbms" className='sub'>Database Management Systems</Link></li>
                        <li><Link to="/os_lab" className='sub'>Operating Systems with Linux Lab</Link></li>
                        <li><Link to="/dbms_lab" className='sub'>Database Management Systems Lab</Link></li>
                        <li><Link to="/pp" className='sub'>Professional Proficiency - I</Link></li>
                    </Col>

                    <Col>

                        <li><Link to="/java" className='sub'>Object Oriented Programming and JAVA</Link></li>
                        <li> <Link to="/cn_lab" className='sub'>Computer Networks Lab</Link></li>
                        <li><Link to="/minor" className='sub'>Minor Project - I</Link></li>

                    </Col>

                </Row>

                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",

                }}>
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>Second Semester</h3>
                    <Col>

                        <li><Link to="/ds" className='sub'>Data and File Structures</Link></li>
                        <li><Link to="/cn" className="sub">Object Oriented Software Engineering</Link></li>
                        <li><Link to="/os" className='sub'>Python Programming</Link></li>
                        <li> <Link to="/java_lab" className='sub'>Advanced Database Management Systems</Link></li>
                        <li><Link to="/dbms" className='sub'>Data Warehousing and Data Mining</Link></li>
                        <li><Link to="" className='sub'>Mobile Applications Design and
                            Development</Link></li>
                        <li><Link to="" className='sub'>Full Stack Development</Link></li>
                        <li><Link to="" className='sub'>Web Technologies</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Management Information System</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Management Principles and Organizational Behavior</Link></li>
                    </Col>

                    <Col>

                        <li><Link to="/java" className='sub'>Theory of Computations</Link></li>
                        <li> <Link to="" className='sub'>Microprocessors</Link></li>
                        <li><Link to="" className='sub'>Embedded System</Link></li>
                        <li><Link to="/java" className='sub'>Information Security</Link></li>
                        <li> <Link to="" className='sub'>Digital Marketing</Link></li>
                        <li><Link to="" className='sub'>Management Information System</Link></li>
                        <li><Link to="/java" className='sub'>Object Oriented Software Engineering Lab.</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Finance and Accounting</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Environment Science (NUES)</Link></li>
                        <li><Link to="" style={{ textDecoration: "none", color: "grey", lineHeight: "2", fontWeight: "600" }}>Professional Proficiency – II</Link></li>
                    </Col>

                    <Col>
                        <li> <Link to="" className='sub'>Finance and Accounting</Link></li>
                        <li><Link to="" className='sub'>Data and File Structures Lab.</Link></li>
                        <li><Link to="/java" className='sub'>Object Oriented Software Engineering Lab.</Link></li>
                        <li> <Link to="" className='sub'>Python Programming Lab.</Link></li>
                        <li><Link to="" className='sub'>Lab. based on Core Elective - I</Link></li>
                        <li> <Link to="" className='sub'>Python Programming Lab.</Link></li>
                        <li><Link to="" className='sub'>Lab. based on Core Elective - I</Link></li>
                        <li><Link to="/java" className='sub'>Management Principles and</Link></li>
                        <li><Link to="" className='sub'> Organizational Behavior</Link></li>

                    </Col>

                </Row>
            </div >
        </>
    )
}


export default Course1;


