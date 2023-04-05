import React, { useState } from "react";
import "./contact.css";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Fade } from "react-reveal";
const Contact = () => {
  const [requestBody, setRequestBody] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const sendEmail = async () => {
    await fetch("http://localhost:8080/sendemail", {
      method: "POST",
      credentials: "same-origin",
      mode: "cors",
      redirect: "follow",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        name: requestBody.name,
        email: requestBody.email,
        service: requestBody.service,
        message: requestBody.message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.error) {
          toast.error(result.error, {
            position: toast.POSITION.TOP_RIGHT,
          });
        } else {
          toast.success(result.success, {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .finally(() => {
        setRequestBody({ name: "", email: "", service: "", message: "" });
      });
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade left>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 ">
            <div className="image-class">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJim5NR8KC-sz7JEmwF3NhyFZw63JVlDvmsg&usqp=CAU"
                alt="left"
                className="image-contact"
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Contact Form</h5>
              </div>
              <form>
                <div className="contact-form">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={requestBody.name}
                    onChange={(e) =>
                      setRequestBody({ ...requestBody, name: e.target.value })
                    }
                  />
                </div>
                <div className="contact-form">
                  <label>Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={requestBody.email}
                    onChange={(e) =>
                      setRequestBody({ ...requestBody, email: e.target.value })
                    }
                  />
                </div>
                <div className="contact-form">
                  <label>Service you need</label>
                  <select
                    className="options"
                    value={requestBody.service}
                    onChange={(e) =>
                      setRequestBody({
                        ...requestBody,
                        service: e.target.value,
                      })
                    }
                  >
                    <option></option>
                    <option>Web development</option>
                    <option>Mobile app development</option>
                    <option>UI/UX</option>
                    <option>Digital marketing</option>
                  </select>
                </div>
                <div className="contact-form">
                  <label>Message</label>
                  <textarea
                    type="text"
                    rows="4"
                    maxLength={500}
                    className="form-control"
                    value={requestBody.message}
                    onChange={(e) =>
                      setRequestBody({
                        ...requestBody,
                        message: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="button-submit" onClick={sendEmail}>
                  <p>
                    Send <IoIosSend size={20} />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
      <ToastContainer autoClose={1000} />
    </div>
  );
};
export default Contact;
