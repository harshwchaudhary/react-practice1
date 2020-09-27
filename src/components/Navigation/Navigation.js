import React from "react";
import "./Navigation.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar bg="white" expand="lg" fixed="top">
      <Navbar.Brand href="#home">
        <img
          src={require("../../assets/images/onju.png")}
          alt="OnjunoLogo"
          className="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" id="mainNav">
          <Nav.Link href="#home" style={{ color: "rgb(255,76,255)" }}>
            Home
          </Nav.Link>
          <NavDropdown title="Company" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about">About</NavDropdown.Item>
            <NavDropdown.Item href="#newsroom">NewsRoom</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Careers</NavDropdown.Item>
            <NavDropdown.Item href="#partners">Partners</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Learn" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#newsroom">Guides</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Help Center</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Legal" id="basic-nav-dropdown">
            <NavDropdown.Item href="#about">Privacy Policy</NavDropdown.Item>
            <NavDropdown.Item href="#newsroom">Terms of Use</NavDropdown.Item>
            <NavDropdown.Item href="#careers">Trademarks</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <button className="login">Login</button>
        <button className="signup">Signup</button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
