import React, { Component } from "react";

import Campaign from "../campaigns/Campaign";
class UpcomingCampaigns extends Component {
  state = {};
  render() {
    return this.props.campaigns.map((campaign) => (
      <Campaign key={campaign.id} campaign={campaign} />
    ));
  }
}

export default UpcomingCampaigns;
