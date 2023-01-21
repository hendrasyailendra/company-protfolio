import React from "react";
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

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Team />
      <Testimonial />
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
    </>
  );
};

export default App;
