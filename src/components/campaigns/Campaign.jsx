import React, { Component } from "react";
import { Col, Row, ProgressBar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

class Campaign extends Component {
  render() {
    const campaign = this.props.campaign;

    var raisedPercentange = parseInt(
      (campaign.amount_raised / campaign.amount_targeted) * 100
    );

    var amount_targeted =
      campaign.amount_targeted / 1000000 >= 1
        ? campaign.amount_targeted / 1000000 + "M "
        : campaign.amount_targeted;

    //calculations of the days left for the campaigns to end
    var date1 = new Date(campaign.end_date);
    var date2 = new Date();
    var difference = date1.getTime() - date2.getTime();
    var daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

    return (
      <Col sm={12} md={4} style={campaignStyle}>
        <Card>
          <Card.Body>
            <Link to="/investment">
              <img
                src={campaign.image}
                className="img-thumbnail"
                alt="thumbnail"
              />
              <span className="blockquote-footer">{campaign.category}</span>
            </Link>
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
            <Card.Header>
              <Row>
                <Col className="text-left">
                  Target
                  <br />
                  <strong>$ {amount_targeted}</strong>
                </Col>
                <Col className="text-center">
                  Location
                  <br />
                  <strong>{campaign.location}</strong>
                </Col>
                <Col className="text-right">
                  Investors
                  <br />
                  <strong>{campaign.investors}</strong>
                </Col>
              </Row>
            </Card.Header>
          </Card.Body>
        </Card>{" "}
      </Col>
    );
  }
}

const campaignStyle = {
  marginBottom: "10px",
};
export default Campaign;
