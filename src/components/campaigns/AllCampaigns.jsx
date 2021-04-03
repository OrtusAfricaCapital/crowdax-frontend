import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Campaign from "./Campaign";

export class AllCampaigns extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    headlines: [
      { id: 1, heading: "Invested So Far", content: "$159,000" },
      { id: 2, heading: "Available Businesses", content: 127 },
      { id: 3, heading: "Done Deals", content: 230 },
      { id: 4, heading: "Available Investors", content: 450 },
    ],
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className="p-1" />
            <h2>Login Status: {this.props.loggedInStatus}</h2>
            <h1>INVEST NOW</h1>
            <p>Browse through the current investment opportunities</p>
            <p className="p-1" />
          </Col>
        </Row>
        <Row>
          {/*Passed down from app.js */}
          {this.props.campaigns.map((campaign) => (
            <Campaign key={campaign.id} campaign={campaign} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllCampaigns;
