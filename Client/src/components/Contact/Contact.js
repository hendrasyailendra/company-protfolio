import React from "react";
import "./contact.css";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 ">
          <div className="image-class">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJim5NR8KC-sz7JEmwF3NhyFZw63JVlDvmsg&usqp=CAU"
              alt="left"
              className="image-contact"
            />
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Form</h5>
            </div>
            <form>
              <div className="contact-form">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="contact-form">
                <label>Email</label>
                <input type="text" className="form-control" />
              </div>
              <div className="contact-form">
                <label>Service you need</label>
                <select className="options">
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
                />
              </div>
              <div className="button-submit">
                <p>
                  Send <IoIosSend size={20} />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
