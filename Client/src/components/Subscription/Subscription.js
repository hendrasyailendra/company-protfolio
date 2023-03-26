import React from "react";
import "./subscription.css";
import { Fade } from "react-reveal";
import { IoIosSend } from "react-icons/io";
const Subscription = () => {
  return (
    <div className="container-fluid subscription" id="subscription">
      <div className="row">
        <Fade right>
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <div className="subscription-title">
              <h5>News Letter, subscribe today!</h5>
            </div>
            <div className="subscription-form">
              <input type="text" placeholder="Your E-mail" />
            </div>
            <div className="subscription-button">
              <p>
                subscribe <IoIosSend size={20} />
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Subscription;
