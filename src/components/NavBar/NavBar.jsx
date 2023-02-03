import React from 'react'
import './navBar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function NavScrollExample() {
  let styleH1 = {
    color: "white",
    fontFamily: "arial",
    fontWeight: "bold",
    textDecoration: "none",
  }
  let title = "VideoFilm"

  let styleIcons = {
    fontSize: "20px",
    color: "lightgrey",
  }

  let styleText = {
    fontSize: "12px",
    color: "rgb(150, 150, 150)",
    fontWeight: "400"
  }

  let styleTextLogIn = {
    fontSize: "12px",
    color: "rgb(0, 200, 0)",
    fontWeight: "400"
  }

  return (
    <Navbar className='p-4' bg="dark" variant='dark' expand="lg" fixed='top'>
      <Container fluid>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Navbar.Brand style={styleH1}>{title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='d-flex flex-row' id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='nav-link' to="">News</Link>
            <Link className='nav-link' to="">Reviews</Link>
            <Link className='nav-link' to="">Interviews</Link>
            <Link className='nav-link' to="/categoria/movies/">Movies</Link>
            <Link className='nav-link' to="">Series</Link>
            {/*}
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            */}
          </Nav>
          <Nav className="d-flex me-2">
            <div className='d-flex align-items-center justify-content-center'>
              <div className='d-flex justify-content-center'>
                <div className=''>
                  <span style={styleIcons}>
                    <i><FontAwesomeIcon icon={faHeart} /></i>
                  </span>
                </div>
              </div>
              <div className='d-flex justify-content-center ms-2'>
                <div className=''>
                  <span style={styleIcons}>
                    <i><FontAwesomeIcon icon={faEye} /></i>
                  </span>
                </div>
              </div>
              <Link className='nav-link' to="/login">
                <div className='d-flex justify-content-center'>
                  <div className=''>
                    <span style={styleIcons}>
                      <i><FontAwesomeIcon icon={faUser} /></i>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;