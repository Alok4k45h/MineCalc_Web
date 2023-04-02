import React, { useState } from "react";
import { Link } from "react-router-dom"; // instead of using anchor tag we use react link for navigation
import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./Navbars.css";

const Navbars = () => {
  const [navcolor, setNavcolor] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavcolor(true);
    } else {
      setNavcolor(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  const path = window.location.pathname;

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="md"
        variant="dark"
        className={
          navcolor
            ? "nav-container colorChange fixed-top"
            : "nav-container fixed-top"
        }
      >
        <Navbar.Brand className="margin-padding">
          <Nav.Link as={Link} to={"/#"}>
            <span className="font-bold nav-heading">
              <img src="./mc_logo.png" className="nav-logo" alt="..." />
              MineCalc
            </span>
          </Nav.Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Container>
            <Nav className="ml-auto content-container">
              <Nav.Link
                as={Link}
                to={"/#"}
                className={`${path === "/" && "active active-link"}`}
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/rockmechanics"}
                className={`${
                  path === "/rockmechanics" && "active active-link"
                }`}
              >
                Rock Mechanics
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/drilling"}
                className={`${path === "/drilling" && "active active-link"}`}
              >
                Drilling & Blasting
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/ventilation"}
                className={`${path === "/ventilation" && "active active-link"}`}
              >
                Mine Ventilation
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/planning"}
                className={`${path === "/planning" && "active active-link"}`}
              >
                Planning & Economics
              </Nav.Link>

              <Nav.Link
                as={Link}
                to={"/contact"}
                className={`${path === "/contact" && "active active-link"}`}
              >
                Contact Us
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navbars;
