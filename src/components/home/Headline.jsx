import React, { Component } from "react";

class Headline extends Component {
  state = {
    heading: this.props.heading,
  };
  render() {
    return (
      <div>
        <span>{this.state.heading}</span>
      </div>
    );
  }
}

export default Headline;
