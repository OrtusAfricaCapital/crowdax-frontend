import React, { Component } from "react";

import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

/* import googleIcon from "../../assests/google_icon.svg";
import facebookIcon from "../../assests/facebook_icon.svg";
import twitterIcon from "../../assests/twitter_icon.svg";
import linkedinIcon from "../../assests/linkedin_icon.svg";
 */
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
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
        "http://localhost:8000/api/v1/registrations",
        {
          user: {
            email: email,
            password: password,
            password_confirmation: password_confirmation,
          },
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("data", response.data);

        if (response.data.status === "created") {
          this.props.handleLogin(response.data);
          this.props.history.push("/");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
        if (error == "Network Error") {
          console.log("silly", error === "Network Error");
        }
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
              <Row>
                <Col sm={8}>
                  <h3 align="center ">Sign Up to Crowdax</h3>
                  <hr />
                  <Form onSubmit={this.handleSubmit}>
                    {/* <Form.Group>
                      <Form.Row>
                        <Col>
                          <Form.Control
                            name="first_name"
                            placeholder="First name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                            required
                          />
                        </Col>
                        <Col>
                          <Form.Control
                            name="last_name"
                            placeholder="Last name"
                            value={this.state.last_name}
                            onChange={this.handleChange}
                            required
                          />
                        </Col>
                      </Form.Row>
                    </Form.Group>
 */}{" "}
                    <Form.Group>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.Control
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    <Button variant="info" size="lg" type="submit">
                      Register
                    </Button>
                  </Form>
                  <p className="p-2" />
                  {/* <h5> Or Signup with </h5>
                  <Row>
                    {this.state.Icons.map((Icon) => (
                      <IconsForSigning key={Icon.id} Icon={Icon} />
                    ))}
                  </Row> */}
                </Col>
                <Col sm className="w-500" style={{ maxWidth: "500px" }}>
                  <h3 align="center">Hello, Investor</h3>
                  <hr />
                  <p align="justify">
                    Join Crowdax and start investing in African startups and
                    companies. Or register your company so that our team asseses
                    it for a possible chance of being funded.
                  </p>
                  <p>If you already have an account sign below</p>
                  <p className="p-3" />
                  <Link to="/signin">
                    <Button variant="info" size="lg" type="submit">
                      Sign In
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}
export default SignUp;
