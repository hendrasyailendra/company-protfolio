import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";

const Home = () => {
  return (
    <div className="container-fluid home" id="home">
      <Fade left>
        <div className="container home-content">
          <h1>
            <Typewriter
              options={{
                strings: ["Legend", "Of", "Elements"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>
            Note that the development build is not optimized. To create a
            production build, use npm run build.{" "}
          </p>
          <span className="view-detail-button">View Details</span>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
