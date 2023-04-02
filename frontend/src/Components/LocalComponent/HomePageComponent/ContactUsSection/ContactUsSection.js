import React from "react";
import { Link } from "react-router-dom";
import "./ContactUsSection.css";

function ContactUsSection() {
  return (
    <div>
      <div className="contact-us-section pt-5 pb-5 text-center">
        <h1 className="contact-us-section-heading mb-3">
          Let us Join Together
        </h1>
        <Link to="/contact">
          <button className="customs-button">CONTACT US</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactUsSection;
