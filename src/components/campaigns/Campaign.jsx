import React, { Component } from "react";
import { Col, Row, ProgressBar } from "react-bootstrap";

class Campaign extends Component {
  render() {
    const campaign = this.props.campaign;

    var raisedPercentange = parseInt(
      (campaign.amount_raised / campaign.amount_targeted) * 100
    );

    //calculations of the days left for the campaigns to end
    var date1 = new Date(campaign.end_date);
    var date2 = new Date();
    var difference = date1.getTime() - date2.getTime();
    var daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

    return (
      <Col sm={4}>
        <img
          src={campaign.image}
          className="img-thumbnail"
          alt="thumbnail"
        ></img>
        <span className="blockquote-footer">{campaign.category}</span>
        <h5>{campaign.title}</h5>
        <p>{campaign.description}</p>
        {/**Calculation for the percentange collected so far */}
        <ProgressBar now={raisedPercentange} striped variant="warning" />
        <Row>
          <Col className="text-left">
            <strong>{raisedPercentange}% </strong>
            fund-raised
          </Col>
          <Col className="text-right">
            <strong>{daysLeft} days</strong> Left
          </Col>
        </Row>
        <hr className="mt-3 mb-6" />
        <Row>
          <Col className="text-left">
            <strong>Target</strong>
            <br />
            {campaign.amount_targeted}/-
          </Col>
          <Col className="text-center">
            <strong>Location</strong>
            <br />
            {campaign.location}
          </Col>
          <Col className="text-right">
            <strong>Investors</strong>
            <br />
            {campaign.investors}
          </Col>
        </Row>
      </Col>
    );
  }
}

const daysLeftStyle = {
  align: "right",
  background: "red",
};

export default Campaign;