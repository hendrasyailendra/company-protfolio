import React from "react";
import "./footer.css";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-about-section">
              <h6 style={{ color: "white", marginTop: "20" }}>About</h6>
              <p>
                Learning a little each day adds up. Research shows that students
                who make learning a habit are more likely to reach their goals.
                Set time aside to learn and get reminders using your learning
                scheduler.
              </p>
              <span className="social-icons">
                <p>
                  <BsFacebook size={30} />
                </p>

                <p>
                  <BsInstagram size={30} />
                </p>
                <p>
                  <BsTwitter size={30} />
                </p>
                <p>
                  <BsLinkedin size={30} />
                </p>
              </span>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6>Services</h6>
              <div className="footer-item">
                <li>Product</li>
                <li>Media Marketing</li>
                <li>Innovation</li>
                <li>Technology</li>
                <li>Environment</li>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
            <div className="footer-service">
              <h6>Customer Care</h6>
              <div className="footer-item">
                <li>Log In</li>
                <li>My Account</li>
                <li>Wish List</li>
                <li>FAQ</li>
                <li>Contact Us</li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
