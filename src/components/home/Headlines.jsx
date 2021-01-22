import React, { Component } from "react";
import Headline from "./Headline";

class Headlines extends Component {
  state = {
    headlines: [
      { id: 0, heading: "22" },
      { id: 1, heading: "33" },
    ],
  };
  render() {
    return (
      <div>
        {this.state.headlines.map((headline) => (
          <Headline
            key={headline.id}
            value={headline.heading}
            selected={true}
          />
        ))}
      </div>
    );
  }
}

export default Headlines;
