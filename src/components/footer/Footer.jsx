import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export class Footer extends Component {
  render() {
    return (
      <div>
        <p className="p-2" />
        <Navbar bg="dark" variant="dark" className="text-light">
          <Nav inline>© Crowdax 2020. All Rights Reserved. </Nav>
          <Nav className="ml-auto">
            {" "}
            <a href="https://www.ortusafricacapital.com/" target="_blank">
              Sponsored by Ortus Africa Capital
            </a>{" "}
            | Terms & Conditions
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
