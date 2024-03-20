import React from "react";
import "./Footer.css";
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LanguageIcon from '@mui/icons-material/Language';

function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">

                    {/* Column1 */}
                    <div className="col">
                        <h5>BCIIT</h5>
                        <h6 className="list-unstyled">
                            <li>Chandiwala Estate, Ma Anandmayee Marg, </li>
                            <li>Shyam Nagar, Kalkaji</li>
                            <li>New Delhi, Delhi 110020</li>
                        </h6>
                    </div>

                    {/* Column2 */}
                    <div className="col">
                        <h5>Main Faculty</h5>
                        <ui className="list-unstyled">
                            <li>Dr. Sushma Bahuguna (Asstt. Professor)</li>
                            <li>Mr. Meetender (Asstt. Professor)</li>
                            <li>Ms. Sonia Batra (Asstt. Professor)</li>
                        </ui>
                    </div>

                    {/* Column3 */}
                    <div className="col">
                        <h5>GET IN TOUCH</h5>
                        <ui className="list-unstyled">
                            <LocalPhoneIcon /> +91-11-49020144<br />
                            <EmailIcon /> director@bciit.ac.in<br />
                            <LanguageIcon />www.bciit.ac.in
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} BCIIT | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;