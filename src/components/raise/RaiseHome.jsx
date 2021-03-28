import React, { Component } from "react";
import { Container, Form } from "react-bootstrap";

export class RaiseHome extends Component {
  render() {
    return (
      <Container fluid>
        <h1>Apply to raise on Crowdax</h1>
        <hr />
        <p>
          Companies may apply to raise with Crowdax more than once. If your
          application is not accepted, we recommend waiting 2-4 months before
          applying again.
        </p>
        <Form>
          <div className="form-check form-check-inline">
            <Form.Group>
              <Form.Label>Company name</Form.Label>
              <Form.Control size="lg" type="text" placeholder="Company name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Company name</Form.Label>
              <Form.Control
                size="lg"
                type="text"
                placeholder="Company location"
              />
            </Form.Group>
          </div>
        </Form>
      </Container>
    );
  }
}

export default RaiseHome;
