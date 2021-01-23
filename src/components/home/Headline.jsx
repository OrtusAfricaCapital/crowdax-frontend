import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Headline extends Component {
  render() {
    return (
      <div>
        <Col style={headlineStyle}>
          <h2>{this.props.headline.heading}</h2>
          <h4>{this.props.headline.content}</h4>
        </Col>
      </div>
    );
  }
}

const headlineStyle = {
  alignText: "center",
};

export default Headline;
