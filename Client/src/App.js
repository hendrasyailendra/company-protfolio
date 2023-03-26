import React, { useState, createContext } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Service from "./components/Service/Service";
import Testimonial from "./components/Testimonial/Testimonial";
import Subscription from "./components/Subscription/Subscription";
import ScrollToTop from "react-scroll-to-top";
import Footer from "./components/Footer/Footer";
import "./App.css";
import Team from "./components/Team/Team";
import Feedback from "./components/Feedback/Feedback";
import Video from "./components/Video/video";
import Career from "./components/Career/Career";
import NavbarMobileView from "./components/Navbar/NavbarMobileView";
import Contact from "./components/Contact/Contact";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("light");
  const handleChangeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={(theme, handleChangeTheme)}>
      <Navbar />
      <NavbarMobileView theme={theme} handleChangeTheme={handleChangeTheme} />
      <Home theme={theme} handleChangeTheme={handleChangeTheme} />
      <div className="main-theme" id={theme}>
        <About />
        <Service />
        <Career />
        <Video />
        <Team />
        <Testimonial />
        <Feedback />
        <Contact />
      </div>
      <Subscription />
      <Footer />
      <ScrollToTop
        smooth
        height="20"
        width="20"
        color="white"
        style={{
          borderRadius: "90px",
          backgroundColor: "crimson",
        }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
