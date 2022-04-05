import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Navi() {

  return (
    <nav className="navbar navbar-light bg-dark d-flex">
      <div className="h1">
        <Link className="text-decoration-none d-flex" to="/">
          <h1 className="text-white d-none d-sm-block"><span>K.H. Portfolio</span></h1>
        </Link>
      </div>

      <Navbar className="nav-links" collapseOnSelect fixed='' expand='lg' bg='dark' variant='dark'>
        <Container className="">
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link className="text-white" href='/about'>About</Nav.Link>
              <Nav.Link className="text-white" href='/projects'>Projects</Nav.Link>
              <Nav.Link className="text-white" href='/skills'>Skills</Nav.Link>
              <Nav.Link className="text-white" href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
    </nav>
  );
}

export default Navi;
