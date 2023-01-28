import React from 'react'
import './navBar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  let styleH1 = {
    color: "white",
    fontFamily: "arial",
    fontWeight: "bold",
    textDecoration: "none",
  }
  let title = "VideoFilm"

  return (
    <Navbar className='p-4' bg="dark" variant='dark' expand="lg" fixed='top'>
      <Container fluid>
        <Link style={{ textDecoration: "none" }} to={"/"}>
          <Navbar.Brand style={styleH1}>{title}</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">News</Nav.Link>
            <Nav.Link href="#action2">Reviews</Nav.Link>
            <Nav.Link href="#action2">Interviews</Nav.Link>
            <NavDropdown title="Movies" id="navbarScrollingDropdown">
              <Link to="/movies/top100/" className='dropdown-item' >Top 100</Link>
              <NavDropdown.Item href="#action4">Most Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Release Calendar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">Browse by Genre</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Series" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action6">Top 50</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Most Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Release Calendar</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9">Browse by Genre</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;