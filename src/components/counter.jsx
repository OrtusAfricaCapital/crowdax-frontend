import { Button } from "react-bootstrap";
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 10,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <Button className="btn btn-secondary btn-sm">funded project (s)</Button>
      </div>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
