import React, { Component } from "react";
import Campaign from "../campaigns/Campaign";

class LatestCampaigns extends Component {
  render() {
    return this.props.campaigns.map((campaign) => (
      <Campaign key={campaign.id} campaign={campaign} />
    ));
  }
}

export default LatestCampaigns;
