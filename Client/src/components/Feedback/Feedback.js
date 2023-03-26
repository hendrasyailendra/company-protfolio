import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import { feedbackData } from "./Feedback.mock";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Rotate } from "react-reveal";

const Feedback = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container feedback-slider" id="feedback">
      <div className="section-title">
        <h5>Feedback</h5>
        <span className="line"></span>
      </div>

      <div className="feedback-slide">
        <Slider {...settings}>
          {feedbackData.map((item, index) => (
            <Rotate clear>
              <div
                className="col-xl-12 col-lg-12 col-md-12 col-sm-12"
                key={`warpper-feedback-index-{index}`}
              >
                <div
                  className="card content-slider"
                  key={`feedback-index-{index}`}
                >
                  <img src={item.img} alt="slider" className="image-slider" />
                  <p>{item.content}</p>
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </Rotate>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
