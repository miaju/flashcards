import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import "./Navbar.scss";

export default function NavBar() {
  return (
  <Navbar sticky="top" bg="light" expand="lg">
      <Container id="test">
        <Navbar.Brand id="brand" href="/">
          Quizzical
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/test">test</Nav.Link>
            <Nav.Link href="/new">New</Nav.Link>
            <Nav.Link href="/cards">Cards</Nav.Link>
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/logout" >Logout</Nav.Link>
            <Nav.Link href="/login" >Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};