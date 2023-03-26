import React from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import { Fade } from "react-reveal";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = ({ theme, handleChangeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={() => handleChangeTheme()}>
        {theme === "light" ? (
          <BsMoonStarsFill size={40} />
        ) : (
          <BsFillSunFill size={40} />
        )}
      </div>
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
