import { Button, NavDropdown} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.scss";

export default function NavBar({ logout, user }) {
  return (
  <Navbar sticky="top" bg="light" expand="lg">
      <Container id="test">
        <Navbar.Brand id="brand" href="/">
          Quizzical
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href="/new"><FontAwesomeIcon icon={faPlusCircle} /></Nav.Link>
            <Nav.Link href="/cards">Your Library</Nav.Link>
            <NavDropdown title="Profile">
              <NavDropdown.Item href="/profile">View Profile</NavDropdown.Item>
              <NavDropdown.Item href="/cards">View Your Study Sets</NavDropdown.Item>
            </NavDropdown>
            {user ? <Nav.Link href="" onClick={() => logout(true)}>Logout</Nav.Link> : <Nav.Link href="/login"> Login </Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};