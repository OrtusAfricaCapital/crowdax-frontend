import React, { Component } from "react";
import { Col } from "react-bootstrap";

class Headline extends Component {
  render() {
    return (
      <div>
        <Col sm xs md style={headlineStyle}>
          <h4>{this.props.headline.heading}</h4>
          <h2>{this.props.headline.content}</h2>
        </Col>
      </div>
    );
  }
}

const headlineStyle = {
  alignText: "center",
  border: "2px #ccc dotted",
  marginRight: "45px",
  align: "center",
};

export default Headline;
