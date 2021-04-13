import axios from "../../axios";
import React, { Component } from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";
class MainNavbar extends Component {
  constructor(props) {
    super(props);

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLogoutClick() {
    axios
      .delete("logout", {
        withCredentials: true,
      })
      .then((response) => {
        this.props.handleLogout();
      })
      .catch((error) => {
        console.log(("logout error: ", error));
      });
  }
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
            <Nav.Link href="companies">Invest</Nav.Link>
            <Nav.Link>|</Nav.Link>
            <span>{this.formatRaiseAccess()}</span>
          </Nav>
          <Nav className="ml-auto">
            <span>{this.formatLogInOut()}</span>
          </Nav>
        </Navbar>
      </div>
    );
  }

  formatLogInOut() {
    if (this.props.loggedInStatus === "LOGGED_IN") {
      return (
        <span>
          <span className="navbarUsername">{this.props.user.firstname}</span>
          <Button
            variant="warning"
            size="lg"
            onClick={() => this.handleLogoutClick()}
          >
            Logout
          </Button>
        </span>
      );
    } else if (this.props.loggedInStatus === "NOT_LOGGED_IN")
      return (
        <span>
          <Link to="/Login">
            <Button variant="info">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="info" style={{ marginLeft: 10 }}>
              Signup
            </Button>
          </Link>
        </span>
      );
  }

  formatRaiseAccess() {
    if (this.props.loggedInStatus === "LOGGED_IN")
      return <Nav.Link href="raise">Raise</Nav.Link>;
    else return <Nav.Link href="login">Raise</Nav.Link>;
  }
}

export default MainNavbar;
