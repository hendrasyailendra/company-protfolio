import React, { useState } from "react";
import "./testimonial.css";
import { data } from "./Testimonial.mock";

const Testimonial = () => {
  const [showMore, setShowMore] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState();

  const loadMore = () => {
    setShowMore((prev) => prev + 3);
  };

  const loadLess = () => {
    setShowMore((prev) => prev - 3);
  };

  return (
    <div className="container testimonial-section" id="testimonials">
      <div className="section-title">
        <h5>Testimonial</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.slice(0, showMore).map((item, index) => {
          return (
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div
                className={
                  index === selectedIndex
                    ? "marked-content-card"
                    : "content-card"
                }
                onClick={() => setSelectedIndex(index)}
              >
                <img src={item.img} alt="user" />
                <p>{item.content}</p>
                <p>
                  <span className="name">{item.name}</span>
                </p>
                <p>{item.position}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row">
        {showMore < data.length && (
          <span className="load-more-button" onClick={loadMore}>
            Load More
          </span>
        )}
        {showMore >= data.length && (
          <span className="load-more-button" onClick={loadLess}>
            Load Less
          </span>
        )}
      </div>
    </div>
  );
};

export default Testimonial;
