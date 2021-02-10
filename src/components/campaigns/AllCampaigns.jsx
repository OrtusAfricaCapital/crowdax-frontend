import React, { Component } from "react";

export class AllCampaigns extends Component {
  render() {
    console.log(this.props.campaigns);
    return <div>All Campaigns</div>;
  }
}

export default AllCampaigns;
