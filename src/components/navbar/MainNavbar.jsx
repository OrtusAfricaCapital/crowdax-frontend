import axios from "axios";
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
      .delete("http://crowdaxconnect.herokuapp.com/api/v1/logout", {
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
            <Nav.Link href="raise">Raise</Nav.Link>
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
          <span className="navbarUsername">{this.props.user.email}</span>
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
}

export default MainNavbar;
