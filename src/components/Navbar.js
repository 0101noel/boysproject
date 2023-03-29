import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      className="navbar-dark bg-dark"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img
              src="img/Capture4.PNG"
              height="30"
              className="d-inline-block align-top"
              alt="AAC logo"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarResponsive" onClick={handleToggle} />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/" className="nav-link" onClick={() => setExpanded(false)}>
                Home
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/about" className="nav-link" onClick={() => setExpanded(false)}>
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/project" className="nav-link" onClick={() => setExpanded(false)}>
                Project
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/productionteam"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Production Team
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/materials" className="nav-link" onClick={() => setExpanded(false)}>
                Materials
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link
                to="/buymaterials"
                className="nav-link"
                onClick={() => setExpanded(false)}
              >
                Buy Materials
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/payment" className="nav-link" onClick={() => setExpanded(false)}>
                Payment
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://api.whatsapp.com/send?phone=%2B639683590382&fbclid=IwAR3_TNOTKLQYh-bIJAAolN2LYUglv-lRJl6YqKn8PqNPd9DUz0IoIjhKgos"
                target="_blank"
                onClick={() => setExpanded(false)}
              >
                Contact
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>

              <Link to="/signin" className="nav-link" onClick={() => setExpanded(false)}>
                Sign In/Log In

              <Link to="auth" className="nav-link" onClick={() => setExpanded(false)}>
                Login / Register

              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
