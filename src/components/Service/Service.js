import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";
import { Zoom } from "react-reveal";
import { serviceData } from "./Service.mock";
const Service = () => {
  const colors = [
    "#CD5C5C",
    "#FF0000",
    "#FFA500",
    "#FFFF00",
    "#808000",
    "#008000",
    "#800080",
    "#0000FF",
  ];

  return (
    <div className="container service-section" id="service">
      <div className="section-title">
        <h5>Services</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {serviceData.map((item, index) => (
          <Zoom>
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-12 "
              key={`wrapper-${index}`}
            >
              <div className="services" key={`service-${index}`}>
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  <p>{item.id}</p>
                </span>
                <div className="list-of-service" key={`service-list-${index}`}>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service1}
                  </p>
                  <span className="service_item_underline"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service2}
                  </p>
                  <span className="service_item_underline"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service3}
                  </p>
                  <span className="service_item_underline"></span>
                  <p>
                    <FcOk size={20} style={{ margin: "5px" }} />
                    {item.service4}
                  </p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Service;
