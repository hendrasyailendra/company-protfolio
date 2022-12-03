import React from "react";
import "./service.css";
import { FcOk } from "react-icons/fc";
const Service = () => {
  const serviceData = [
    {
      id: 1,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 2,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 3,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 4,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 5,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 6,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 7,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
    {
      id: 8,
      service1: "Web development",
      service2: "Mobile app development",
      service3: "UI/UX design",
      service4: "Digital marketing",
    },
  ];

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
    <div className="container service-section">
      <div className="section-title">
        <h5>Services</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {serviceData.map((item, index) => (
          <>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
              <div className="services">
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                  <p>{item.id}</p>
                </span>
                <div className="list-of-service">
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
          </>
        ))}
      </div>
    </div>
  );
};

export default Service;
