import React, { Component } from "react";

export class FooterNoTwo extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          {/** Column 1*/}
          <Col md={3} sm={6}></Col>

          {/** Column 2*/}
          <Col md={3} sm={6}></Col>
          {/** Column 3*/}
          <Col md={3} sm={6}></Col>

          {/** Column 4*/}
          <Col md={3} sm={6}></Col>

          <hr />
        </Row>
        {/** Bottom Footer*/}
        <Row>
          <Col md={{ span: 2, offset: 3 }}>© 2021 Crowdax </Col>
          <Col md={{ span: 3, offset: 1 }}>
            <strong>Terms & Privacy.</strong>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default FooterNoTwo;
