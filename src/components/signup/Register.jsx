import React, { useRef } from "react";
import { Button, Col, Form, Row, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
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
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      ref={emailRef}
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      ref={passwordRef}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
                      placeholder="Re-enter password"
                      ref={passwordConfirmRef}
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
                {/* <Row>
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

export default Register;
