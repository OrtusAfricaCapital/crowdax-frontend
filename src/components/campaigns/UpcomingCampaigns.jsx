import React, { Component } from "react";
import Campaign from "../campaigns/Campaign";

class UpcomingCampaigns extends Component {
  render() {
    const upcomingCampaigns = this.props.campaigns;
    return (
      upcomingCampaigns
        .slice(3, 6)
        //.sort((a, b) => b.start_date - a.start_date)
        .map((campaign) => <Campaign key={campaign.id} campaign={campaign} />)
    );
  }
}

export default UpcomingCampaigns;
