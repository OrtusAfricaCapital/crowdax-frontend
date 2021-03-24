import React, { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
class MainNavbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Link to="/">
            <Navbar.Brand href="#home">
              {" "}
              <img
                alt=""
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{" "}
              Crowdax
            </Navbar.Brand>
          </Link>
          <Nav className="ml-auto">
            <Nav.Link href="investments">Invest</Nav.Link>
            <Nav.Link>|</Nav.Link>
            <Nav.Link href="raise">Raise</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Link to="/signin">
              <Button variant="info">Login</Button>
            </Link>
            <Link to="/signup">
              <Button variant="info" style={{ marginLeft: 10 }}>
                Signup
              </Button>
            </Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MainNavbar;
