import React, { Component } from "react";
import Campaign from "../campaigns/Campaign";

class LatestCampaigns extends Component {
  render() {
    const latestCampaign = this.props.campaigns.sort(
      (a, b) => new Date(a.start_date) - new Date(b.start_date)
    );

    return latestCampaign
      .slice(Math.max(latestCampaign.length - 3, 1))
      .map((campaign) => <Campaign key={campaign.id} campaign={campaign} />);
  }
}

export default LatestCampaigns;
