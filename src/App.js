import React from "react";
import logo from "./logo.svg";
import image from "./images/Rohtang.jpg";
import "./App.css";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Navbar,
  NavDropdown,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar expand="lg" sticky="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Info</Nav.Link>
            <Nav.Link href="#link">Aerial Video</Nav.Link>
            <Nav.Link href="#3DTour">3D Tour</Nav.Link>
            <Nav.Link href="#Photos">Photos</Nav.Link>
            <Nav.Link href="#Map">Map</Nav.Link>
            <Nav.Link href="#Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        <img src={image} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Container fluid>
          <Row>
            <Col>1 of 1</Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default App;
