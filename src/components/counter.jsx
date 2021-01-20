import { Button } from "react-bootstrap";
import React, { Component } from "react";
import MainNavbar from "./navbar/MainNavbar";

class Counter extends Component {
  state = {
    value: this.props.value,
    imageUrl: "https://picsum.photos/200",
  };

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span style={this.styles} className="badge badge-primary m-2">
          {this.formatCount()}
        </span>
        <Button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          funded project (s)
        </Button>
      </div>
    );
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
