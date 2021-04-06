import React, { Component } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

/* import googleIcon from "../../assests/google_icon.svg";
import facebookIcon from "../../assests/facebook_icon.svg";
import twitterIcon from "../../assests/twitter_icon.svg";
import linkedinIcon from "../../assests/linkedin_icon.svg"; */
import { Link } from "react-router-dom";
import axios from "axios";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emai: "",
      password: "",
      LoginErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  //Prevents a signed user to access signup page
  componentDidUpdate() {
    if (this.props.loggedInStatus == "LOGGED_IN") this.props.history.push("/");
  }

  handleSubmit(event) {
    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "https://crowdaxconnect.herokuapp.com/api/v1/sessions",
        {
          user: {
            email: email,
            password: password,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        if (response.data.logged_in) {
          this.props.handleLogin(response.data);
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        console.log("Login Error", error);
      });

    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  render() {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "800px" }}>
          <Card>
            <Card.Body>
              <Row style={{ margin: "50px" }}>
                <Col sm={4}>
                  <h3 align="center">Join Crowdax</h3>

                  <hr />
                  <p align="justify">
                    Start investing or fund raising with Crowdax by getting a
                    fresh new account.
                  </p>

                  <p className="p-2" />
                  <Link to="/signup">
                    <Button variant="info" size="lg" type="submit">
                      Signup{" "}
                    </Button>
                  </Link>
                </Col>
                <Col sm={8}>
                  <h3 align="center">Welcome back to Crowdax</h3>
                  <hr />
                  <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />{" "}
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />{" "}
                    </Form.Group>

                    <Button variant="info" size="lg" type="submit">
                      Login
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

export default Login;
