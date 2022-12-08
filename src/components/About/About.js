import React from "react";
import "./about.css";
import { FcSlrBackSide, FcCloth, FcExport } from "react-icons/fc";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaYEDLX5fpwM9F1YS8RO8CKPq04nDmQS9gVA&usqp=CAU"
              height="400px"
              width="400px"
              alt="about_image"
            />
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About</h5>
              <span className="line"></span>
              <p>
                Adding Images, Fonts, and Files. With webpack, using static
                assets like images and fonts works similarly to CSS.
              </p>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcSlrBackSide size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Perfect</h6>
                    <p>Some versions have web compatibility issues.</p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcCloth size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Perfect</h6>
                    <p>Some versions have web compatibility issues.</p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcExport size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Perfect</h6>
                    <p>Some versions have web compatibility issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
