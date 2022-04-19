import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../assets/KH-LOGO.png";

function Navi() {

  return (
    <nav className="navbar d-flex">
      <div className="">
        <Link className="text-decoration-none d-flex hover-underline-animation" to="/">
          <img className="p-3 pt-2" src={Logo} alt="Konner Hartman Logo" height="75px"></img>
          <h1 className="text-white d-none d-sm-block justify-content-center align-self-center"><span> Portfolio</span></h1>
        </Link>
      </div>

      <Navbar className="nav-links" collapseOnSelect expand='md' bg='none' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav>
              <Nav.Link className="text-white hover-underline-animation" href='/about'>About</Nav.Link>
              <Nav.Link className="text-white hover-underline-animation" href='/projects'>Projects</Nav.Link>
              <Nav.Link className="text-white hover-underline-animation" href='/skills'>Skills</Nav.Link>
              <Nav.Link className="text-white hover-underline-animation" href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>  
      </Navbar>
    </nav>
  );
}

export default Navi;
