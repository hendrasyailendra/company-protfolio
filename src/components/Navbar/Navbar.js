import React, { useState } from "react";
import "./navbar.css";

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
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Service</li>
        <li className="nav-item">Career</li>
        <li className="nav-item">Video</li>
        <li className="nav-item">Team</li>
        <li className="nav-item">Testimonial</li>
        <li className="nav-item">Feedback</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Subscription</li>
      </ul>
    </nav>
  );
};

export default Navbar;
