import React, { useState } from "react";
import "./navbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({ theme, handleChangeTheme }) => {
  const [open, setOpen] = useState(false);
  const handleNavBarOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="responsive-mobile-view">
      <div className="container-fluid mobile-view-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleNavBarOpen} />
        </p>
      </div>
      {open ? (
        <div className="mobile-nav">
          <ul>
            <Link to="home" spy={true} smooth={true} offset={-50} duration={10}>
              <li className="nav-item">Home</li>
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">About</li>
            </Link>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Service</li>
            </Link>
            <Link
              to="career"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Career</li>
            </Link>
            <Link
              to="video"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Video</li>
            </Link>
            <Link to="team" spy={true} smooth={true} offset={-50} duration={10}>
              <li className="nav-item">Team</li>
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Testimonial</li>
            </Link>

            <Link
              to="feedback"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Feedback</li>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Contact</li>
            </Link>
            <Link
              to="subscription"
              spy={true}
              smooth={true}
              offset={-50}
              duration={10}
            >
              <li className="nav-item">Subscription</li>
            </Link>
            <li>
              <Switch
                onChange={handleChangeTheme}
                checked={theme === "light"}
              />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default NavbarMobileView;
