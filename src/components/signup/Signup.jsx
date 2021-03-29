import React, { Component } from "react";

import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
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
      emai: "",
      password: "",
      password_confirmation: "",
      registrationErrors: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    //structure email, password, password_confirmation easy to read

    const { email, password, password_confirmation } = this.state;

    axios
      .post(
        "http://localhost:8000/registrations",
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
        console.log("registration response", response);
      })
      .catch((error) => {
        console.log("registration error", error);
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
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="FormPassword">
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group controlId="formPasswordConfirmation">
                      <Form.Control
                        type="password"
                        name="password_confirmation"
                        placeholder="Password Confirmation"
                        value={this.state.password_confirmation}
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>
                    {/*    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I have agreed to Terms & Conditions"
                      />
                    </Form.Group>
 */}
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
