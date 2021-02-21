import React, { Component } from "react";

import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconsForSigning from "./IconsForSigning";
import googleIcon from "../../assests/google_icon.svg";
import facebookIcon from "../../assests/facebook_icon.svg";
import twitterIcon from "../../assests/twitter_icon.svg";
import linkedinIcon from "../../assests/linkedin_icon.svg";

class SignUp extends Component {
  state = {
    Icons: [
      { id: 1, iconUrl: facebookIcon },
      { id: 2, iconUrl: googleIcon },
      { id: 3, iconUrl: linkedinIcon },
      { id: 4, iconUrl: twitterIcon },
    ],
  };
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
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" required />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Control
                        type="password"
                        placeholder="Re-enter password"
                        required
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I have agreed to Terms & Conditions"
                      />
                    </Form.Group>

                    <Button variant="info" size="lg" type="submit">
                      Register
                    </Button>
                  </Form>
                  <p className="p-2" />
                  <h5> Or Signup with </h5>
                  <Row>
                    {this.state.Icons.map((Icon) => (
                      <IconsForSigning key={Icon.id} Icon={Icon} />
                    ))}
                  </Row>
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
