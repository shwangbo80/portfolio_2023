import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container} from "react-bootstrap";

function NavComponent() {
  return (
    <>
      <header
        id="header"
        className="border-bottom-0 no-sticky transparent-header">
        <div id="header-wrap">
          <div className="container">
            <div className="container-fluid mx-0">
              <Navbar collapseOnSelect expand="lg">
                <Navbar.Brand href="#home">Soo_Hwangbo</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto py-5"></Nav>
                  <Nav>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#projects">Works</Nav.Link>
                    <Nav.Link href="#contact">Contact</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default NavComponent;
