import React, { Component } from "react";
import { Card, Col } from "react-bootstrap";

class Headline extends Component {
  render() {
    return (
      <Col sm={3} md={3}>
        <Card>
          <Card.Header>
            <h2>{this.props.headline.content}</h2>
            <hr />
            <h6>{this.props.headline.heading}</h6>
          </Card.Header>
        </Card>
      </Col>
    );
  }
}

const headlineStyle = {
  alignText: "center",
  //border: "2px #ccc dotted",
  paddingRight: "40px",
  paddingLeft: "40px",
  //marginLeft: "30px",
  //marginRight: "30px",
  align: "center",
};

export default Headline;
