import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export class RaiseHome extends Component {
  render() {
    return (
      <Container fluid="sm" >   
        <p className="p-2"/>     
        <h1>Apply to raise funds</h1>
        <hr />
        <Row className="justify-content-md-center" >
          <Col >
          <p>
          Companies may apply to raise with Crowdax more than once. If your
          application is not accepted, we recommend waiting 2-4 months before
          applying again.
          </p>
          </Col>        
        </Row>
        <Form>
          <Form.Row>
            
            <Form.Group as={Col} controlId="ventureName">
              <Form.Label><strong>Venture Name</strong></Form.Label>
              <Form.Control type="text" placeholder="e.g Crowdax Limited"/>
            </Form.Group>

            <Form.Group as={Col} controlId="ventureSector">
              <Form.Label><strong>Sector</strong></Form.Label>
              <Form.Control type="text" placeholder="For example: Agriculture"/>
            </Form.Group>

          </Form.Row>

          <Form.Row>
            
            <Form.Group as={Col} controlId="ventureDescription">
              <Form.Label><strong>Short Description</strong></Form.Label>
              <Form.Control as="textarea" rows={4} placeholder=""/>
            </Form.Group>

            <Form.Group as={Col} controlId="ventureTraction">
              <Form.Label><strong>Traction</strong></Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Metrics telling a compelling story about your venture. This could include user egagements, revenues, partnerships and many more"/>
            </Form.Group>

          </Form.Row>

          <Form.Row>
            
            <Form.Group as={Col} controlId="ventureLocation">
              <Form.Label><strong>Location</strong></Form.Label>
              <Form.Control type="text" placeholder="e.g King Ceasor Square. Kampala. Uganda."/>
            </Form.Group>

            <Form.Group as={Col} controlId="venturePitchdeck">
              <Form.Label><strong>PitchDeck</strong></Form.Label>
              <Form.File />
              <Form.Text className="text-muted"> All information submitted in this application is for internal use only and is treated with the utmost confidentiality.</Form.Text>
            </Form.Group>

          </Form.Row>

          <Form.Row>
            
            <Form.Group as={Col} controlId="referredby">
              <Form.Label><strong>Referred by</strong></Form.Label>
              <Form.Control type="text" placeholder=""/>
              <Form.Text className="text-muted"> If you were referred to us by someone, let us know. Referrals from our partners get priority screening. </Form.Text>

            </Form.Group>

            <Form.Group as={Col} controlId="venturePitchdeck">
            </Form.Group>

          </Form.Row>
          
          <Button variant="primary" type="submit"> Submit </Button>
        </Form>
      
      </Container>
    );
  }
}

export default RaiseHome;
