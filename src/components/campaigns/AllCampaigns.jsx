import React, { Component } from "react";
import { Col, Container, Form, FormControl, Row } from "react-bootstrap";
import Campaign from "./Campaign";

export class AllCampaigns extends Component {
  state = {
    campaigns: [
      {
        id: 1,
        image: "https://picsum.photos/340/120",
        title: "The97fund",
        category: "Innovation",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
        amount_raised: 900000,
        amount_targeted: 6000000,
        start_date: "01/01/2021",
        end_date: "2/2/2021",
        investors: 11,
        major_investor: "Cynopus",
        location: "Massajja",
      },
      {
        id: 2,
        image: "https://picsum.photos/341/120",
        title: "Flip Africa",
        category: "Technology",
        description:
          "The Flip platform offers businesses the agility to hire talent for a specific work task without risk,",
        amount_raised: 4300000,
        amount_targeted: 9000000,
        start_date: "12/12/2020",
        end_date: "12/3/2021",
        investors: 6,
        major_investor: "Ortus Africa Capital",
        location: "Seguku",
      },

      {
        id: 3,
        image: "https://picsum.photos/342/121",
        title: "City Life",
        category: "Music",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 5000000,
        amount_targeted: 10000000,
        start_date: "13/1/2021",
        end_date: "2/23/2021",
        investors: 72,
        major_investor: "UCC",
        location: "Ndejje",
      },
      {
        id: 4,
        image: "https://picsum.photos/342/119",
        title: "Famunera",
        category: "Agriculture",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 2400000,
        amount_targeted: 35000000,
        start_date: "13/1/2021",
        end_date: "3/1/2021",
        investors: 10,
        major_investor: "Leco Bakery",
        location: "Ndejje",
      },
      {
        id: 5,
        image: "https://picsum.photos/342/121",
        title: "Minute 5",
        category: "Business",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 2400000,
        amount_targeted: 300000,
        start_date: "25/1/2021",
        end_date: "3/1/2021",
        investors: 122,
        major_investor: "Ortus Advocates",
        location: "Kawempe",
      },
      {
        id: 6,
        image: "https://picsum.photos/341/121",
        title: "Xente",
        category: "Innovation",
        description:
          "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
        amount_raised: 31000000,
        amount_targeted: 35000000,
        start_date: "13/1/2021",
        end_date: "3/1/2021",
        investors: 12,
        major_investor: "Tripixio",
        location: "Mutundwe",
      },
    ],
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className="p-1" />
            <h1>INVEST NOW</h1>
            <p>Browse through the current investment opportunities</p>
            <p className="p-1" />
          </Col>
        </Row>
        <Row>
          {this.state.campaigns.map((campaign) => (
            <Campaign key={campaign.id} campaign={campaign} />
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllCampaigns;
