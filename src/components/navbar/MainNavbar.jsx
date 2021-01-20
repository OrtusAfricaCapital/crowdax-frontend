import React, { Component } from "react";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
class MainNavbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
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

          <Nav className="ml-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Find Active Campaigns"
                className="mr-sm-2"
              />
              <Button variant="info">Login</Button>
              <Button variant="info" style={{ marginLeft: 10 }}>
                Signup
              </Button>
            </Form>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default MainNavbar;
