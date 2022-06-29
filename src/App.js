import React from 'react';
import './App.css';
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Pricing } from './components/pages';
import {Converters} from './components/pages'; 



function App() {
    let component
    switch (window.location.pathname) {
        case "/":
                component = <App />
                break
            case "/pricing":
                component = <Pricing />
                break
                case "/converters":
                    component = <Converters />
                    break
    }
  return (
    <>
    {component}
    <div className="App">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">File Converters</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <NavDropdown title="Converters" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <Nav.Link href="#contact-us">Contact Us</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="sign-up">
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
    </>
  );
}

export default App;