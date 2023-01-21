import React from "react";
import "./team.css";
import { data } from "./Team.mock";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

const Team = () => {
  return (
    <div className="container team-member" id="team">
      <div className="section-title">
        <h5>Team</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-2 col-sm-12">
            <div className="card team-members-item">
              <img src={item.img} alt="team" />
              <div className="team-info">
                <h6>{item.name}</h6>
                <p>{item.content}</p>
                <span className="line-footer"></span>

                <div className="social-icons">
                  <p>
                    <BsFacebook size={25} />
                  </p>
                  <p>
                    <BsInstagram size={25} />
                  </p>
                  <p>
                    <BsTwitter size={25} />
                  </p>
                  <p>
                    <BsLinkedin size={25} />
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
