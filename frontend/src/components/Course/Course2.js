import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../Header'
import "./Course.css"
import { Link } from 'react-router-dom';
import Footer from '../Footer';

function Course2() {

    return (
        <>
            <Header />
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
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>Third Semester</h3>
                    <Col>

                        <li><Link to="/ds" className='link'>Design and Analysis of Algorithms</Link></li>

                        <li>
                            <Link to="/cn" className="link">
                                Artificial Intelligence and
                                Learning
                            </Link></li>

                        <li><Link to="/os" className='link'>Statistics and Data Analytics</Link></li>

                        <li> <Link to="/java_lab" className='link'>Enterprise Computing with JAVA</Link></li>
                        <li><Link to="/dbms" className='link'>Natural Language Processing</Link></li>
                        <li><Link to="" className='link'>Computer Graphics</Link></li>
                        <li><Link to="" className='link'>Wireless Sensor Networks</Link></li>
                        <li><Link to="" className='link'>Software Project Management</Link></li>
                        <li><Link to="/java" className='link'>Advanced Computer Architecture</Link></li>
                        <li><Link to="" className='link'> Distributed Systems</Link></li>
                        <li><Link to="" className='link'>Applied Cryptography</Link></li>

                    </Col>

                    <Col>




                        <li><Link to="" className='link'>Cloud Computing</Link></li>
                        <li><Link to="" className='link'>e-Business Systems</Link></li>
                        <li><Link to="/java" className='link'>Web Intelligence and Big Data Machine</Link></li>
                        <li> <Link to="/cn_lab" className='link'>Flutter and Dart</Link></li>
                        <li><Link to="" className='link'>Service Oriented Architecture</Link></li>
                        <li><Link to="" className='link'>Multimedia TechnologiesInternet of Things</Link></li>
                        <li><Link to="" className='link'>Soft Computing</Link></li>
                        <li><Link to="" className='link'>Software Quality Management</Link></li>
                        <li><Link to="" className='link'>Digital Image Processing</Link></li>
                        <li><Link to="" className='link'>Compiler Design</Link></li>
                        <li><Link to="" className='link'>Parallel Computing</Link></li>
                        <li><Link to="" className='link'>Numerical and Scientific Computing</Link></li>
                    </Col>


                    <Col>




                        <li><Link to="" className='link'>Research Methodology</Link></li>
                        <li><Link to="" className='link'>Operational Research</Link></li>
                        <li><Link to="" className='link'>Cyber Security and Cyber Laws</Link></li>
                        <li><Link to="" className='link'>e-Content Development</Link></li>
                        <li><Link to="" className='link'>Design and Analysis of Algorithms Lab.</Link></li>
                        <li><Link to="" className='link'>Artificial Intelligence and Machine Learning Lab.</Link></li>
                        <li><Link to="" className='link'>Lab. based on Core Elective - II</Link></li>
                        <li><Link to="" className='link'>Lab. based on Core Elective - III</Link></li>
                        <li><Link to="" className='link'>Minor Project – III</Link></li>
                        <li><Link to="" className='link'>Entrepreneurship Mindset (NUES)</Link></li>
                        <li><Link to="" className='link'>Professional Proficiency – III</Link></li>


                    </Col>

                </Row>




                <Row style={{
                    display: "flex",
                    textAlign: "center",
                    justifyContent: "space-evenly",
                    marginTop: "80px",
                }}>
                    <h3 style={{ marginBottom: "30px", fontWeight: "bold" }}>Fourth Semester</h3>
                    <Col>

                        <li><Link to="/ds" className='link'>Dissertation (Major Project)</Link></li>


                    </Col>
                    <Col>

                        <li><Link to="/java" className='link'>One MOOC Course</Link></li>

                    </Col>

                    <Col>
                        <li> <Link to="" className='link'>Professional Proficiency – IV</Link></li>
                    </Col>
                </Row>

            </div >


        </>
    )
}


export default Course2


