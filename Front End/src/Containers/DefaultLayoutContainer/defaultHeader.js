import React from "react";
import {
  Navbar,
  Nav,
  Container,

} from "react-bootstrap";
import "./DefaultLayout.css";
import Avatar from '@material-ui/core/Avatar';
export default function DefaultHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <Avatar >JE</Avatar>
          <div className="profile-div">
            <span className="proname-text">Jamshy EK</span><br />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link active href="#">Dashboard</Nav.Link>
            <Nav.Link href="#">Staff</Nav.Link>
            <Nav.Link href="#">
              Employee            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
