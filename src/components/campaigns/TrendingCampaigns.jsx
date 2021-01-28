import React, { Component } from "react";
import Campaign from "../campaigns/Campaign";
class TrendingCampaigns extends Component {
  state = {};
  render() {
    const trendingCampaigns = this.props.campaigns;

    return trendingCampaigns
      .slice(0, 3)
      .map((campaign) => <Campaign key={campaign.id} campaign={campaign} />);
  }
}

export default TrendingCampaigns;
