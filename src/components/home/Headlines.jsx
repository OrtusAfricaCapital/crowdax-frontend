import React, { Component } from "react";
import Headline from "../home/Headline";

class Headlines extends Component {
  render() {
    return this.props.headlines.map((headline) => (
      <Headline key={headline.id} headline={headline} />
    ));
  }
}

export default Headlines;
