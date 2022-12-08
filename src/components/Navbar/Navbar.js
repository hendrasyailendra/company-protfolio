import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navColor, setNavColor] = useState(false);

  const onScroll = () => {
    window.scrollY >= 100 ? setNavColor(true) : setNavColor(false);
  };

  window.addEventListener("scroll", onScroll);
  return (
    <nav
      className={navColor ? "navbar-main navbar-scroll-main" : "navbar-main"}
    >
      <ul>
        <Link to="home" spy={true} smooth={true} offset={-50} duration={10}>
          <li className="nav-item">Home</li>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-50} duration={10}>
          <li className="nav-item">About</li>
        </Link>
        <Link to="service" spy={true} smooth={true} offset={-50} duration={10}>
          <li className="nav-item">Service</li>
        </Link>
        <Link to="career" spy={true} smooth={true} offset={-50} duration={10}>
          <li className="nav-item">Career</li>
        </Link>
        <Link to="video" spy={true} smooth={true} offset={-50} duration={10}>
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
        <Link to="feedback" spy={true} smooth={true} offset={-50} duration={10}>
          <li className="nav-item">Feedback</li>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-50} duration={10}>
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
      </ul>
    </nav>
  );
};

export default Navbar;
