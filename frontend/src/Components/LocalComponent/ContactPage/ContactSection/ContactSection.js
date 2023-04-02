import React, { Component } from "react";
import "./ContactSection.css";

class ContactSection extends Component {
  render() {
    return (
      <div className="container contact">
        <div className="row pt-5">
          <div className="col-md-6 p-5">
            <img src="./contactus.svg" alt="" />
          </div>
          <div className="col-md-6">
            <div className="contact-form m-2 p-5 n-box2">
              <h3 className="pro-heading">Contact US</h3>

              <hr />
              <input
                type="text"
                className="form-control inputEl mb-3"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control inputEl mb-3"
                placeholder="E-mail"
              />

              <textarea
                className="form-control mb-3"
                rows={3}
                defaultValue={"Post Your Query"}
              />

              <button className="btn btn-outline-dark mt-3">SUMBIT</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactSection;
