import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import React from "react";
import { FaArrowCircleDown } from "react-icons/fa";

const Mynavbar = () => {
  return (
    <>
      <div className="container-custom  ">
        <Navbar expand="lg" className="bg-body-white">
          <Navbar.Brand href="#home">
          
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav shadow-none" />
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="d-flex justify-content-start gap-2 align-items-center w-100 text-dark">
            <Nav.Link href="#home"> <h5>All categories <span className="h6 "><FaArrowCircleDown /></span> </h5></Nav.Link>
              <Nav.Link href="#home">Mobile Phones</Nav.Link>
              <Nav.Link href="#car">Cars</Nav.Link>
              <Nav.Link href="#moter">Motorcycles</Nav.Link>
              <Nav.Link href="#house">Houses</Nav.Link>
              <Nav.Link href="#tv">TV - Video - Audio</Nav.Link>
              <Nav.Link href="#tablets">Tablets</Nav.Link>
              <Nav.Link href="#land">Land & Plots</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default Mynavbar;
