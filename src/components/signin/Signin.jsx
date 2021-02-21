import React, { Component } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";

import googleIcon from "../../assests/google_icon.svg";
import facebookIcon from "../../assests/facebook_icon.svg";
import twitterIcon from "../../assests/twitter_icon.svg";
import linkedinIcon from "../../assests/linkedin_icon.svg";
import { Link } from "react-router-dom";

export class SignIn extends Component {
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
                  <p className="p-2" />
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
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button variant="info" size="lg" type="submit">
                      Login
                    </Button>
                  </Form>
                  <p className="p-4" />
                  <h4> or login with </h4>
                  <Row>
                    <Col className="col-2">
                      <Image
                        src={googleIcon}
                        width="50px"
                        height="50px"
                        roundedCircle
                      />
                    </Col>

                    <Col className="col-2">
                      <Image
                        src={facebookIcon}
                        width="50px"
                        height="50px"
                        roundedCircle
                      />
                    </Col>
                    <Col className="col-2">
                      <Image
                        src={twitterIcon}
                        width="50px"
                        height="50px"
                        roundedCircle
                      />
                    </Col>

                    <Col className="col-2">
                      <Image
                        src={linkedinIcon}
                        width="50px"
                        height="50px"
                        roundedCircle
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </Container>
    );
  }
}

export default SignIn;
