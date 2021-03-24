import React, { Component } from "react";

import { Nav, Navbar } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p className="p-2" />
        <Navbar bg="dark" variant="light" className="text-light">
          <Nav inline>© Crowdax 2021. All Rights Reserved. </Nav>
          <Nav className="ml-auto">
            {" "}
            <a
              href="https://www.ortusafricacapital.com/"
              target="_blank"
              rel="noreferrer"
            >
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
