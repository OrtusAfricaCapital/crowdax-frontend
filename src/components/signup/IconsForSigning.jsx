import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";

export class IconsForSigning extends Component {
  render() {
    return (
      <Col md={{ span: 2, offset: 0 }}>
        <Image
          src={this.props.Icon.iconUrl}
          width="50px"
          height="50px"
          roundedCircle
        />
      </Col>
    );
  }
}

export default IconsForSigning;
