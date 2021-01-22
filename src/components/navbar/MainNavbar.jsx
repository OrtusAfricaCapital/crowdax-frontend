import React, { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
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
            <Form inline>
              <FormControl
                type="text"
                placeholder="Find Active Campaigns"
                className="mr-sm-2"
              />
              <Link to="/signin">
                <Button variant="info">Login</Button>
              </Link>
              <Link to="/signup">
                <Button variant="info" style={{ marginLeft: 10 }}>
                  Signup
                </Button>
              </Link>
            </Form>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MainNavbar;
