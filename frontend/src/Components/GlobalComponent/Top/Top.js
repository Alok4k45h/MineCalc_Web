import React from "react";
import { FaAngleUp } from "react-icons/fa";
import "./Top.css";

export default function Top() {
  function TopEvent() {
    // Below code works for all modern browsers
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("topButton").style.visibility = "visible";
    } else {
      document.getElementById("topButton").style.visibility = "hidden";
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };
  window.onload = function () {
    scrollFunction();
  }; //To make sure that this button is not visible at starting.
  // When the user clicks on the button, scroll to the top of the document
  return <FaAngleUp onClick={TopEvent} id="topButton" title="Scroll to top" />;
}
