import React, { Component } from "react";
import { Col, Image } from "react-bootstrap";

export class IconsForSigning extends Component {
  render() {
    return (
      <Col className="col-2">
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
