import React from "react";
import "./video.css";
import { videoData } from "./Video.mock";
import ReactPlayer from "react-player";

const Video = () => {
  return (
    <div className="container video" id="video">
      <div className="section-title">
        <h5>Video</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {videoData.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
            <div className="video-details">
              <ReactPlayer
                url={item.url}
                width="auto"
                height="300px"
                controls
              />
              <h6>{item.title}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Video;
