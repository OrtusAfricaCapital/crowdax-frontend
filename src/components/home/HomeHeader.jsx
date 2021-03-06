import React, { Component } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Container,
} from "react-bootstrap";
import search_icon from "../../assests/search_icon.png";
import UpcomingCampaigns from "../campaigns/UpcomingCampaigns";
import TrendingCampaigns from "../campaigns/TrendingCampaigns";
import LatestCampaigns from "../campaigns/LatestCampaigns";
import Headlines from "./Headlines";
import { Link } from "react-router-dom";

export class HomeHeader extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <p className="p-5" />
            <Form>
              <InputGroup size="lg">
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <img
                      src={search_icon}
                      width="30px"
                      height="30px"
                      alt="search"
                    />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="What's the Business? "
                />
                <InputGroup.Prepend>
                  <InputGroup.Text>Search</InputGroup.Text>
                </InputGroup.Prepend>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <p />
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} style={{ textAlign: "center" }}>
            <Button variant="info" size="lg">
              <h4>Search Investments</h4>
            </Button>{" "}
          </Col>
        </Row>
        <p />
        <Row>
          <Col md={{ span: 10, offset: 1 }} align="center">
            Investing involves risks, including loss of capital, illiquidity,
            lack of dividends and dilution, and should be done only as part of a
            diversified portfolio. Please read the Risk Warnings before
            investing. Investments should only be made by investors who
            understand these risks. Tax treatment depends on individual
            circumstances and is subject to change in future.
          </Col>
        </Row>
        <p className="p-5" />
        <Container
          fluid
          className="d-flex align-items-center justify-content-center"
          style={{ minHeight: "2vh" }}
        >
          <div className="w-100">
            <Row>
              <Headlines headlines={this.props.headlines} />
            </Row>
          </div>
        </Container>

        <p className="p-2" />
        <hr />
        <Row sm={2} md={2}>
          <Col>
            <DropdownButton
              id="bg-vertical-dropdown-1"
              as={ButtonGroup}
              variant="info"
              size="lg"
              drop="right"
              title="Filter"
            >
              <Dropdown.Item eventKey="1">Most Funded</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Latest</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="2">Rated</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col style={allPitchesDesign}>
            <Link
              to={{
                pathname: "/companies",
                campaigns: this.props.campaigns,
              }}
            >
              <Button Badge variant="info" size="lg">
                Showcase all
              </Button>
            </Link>
          </Col>
        </Row>

        {/* The trending Campaigns  */}
        <p className="p-2" />
        <h3>Trending Business</h3>
        <hr />
        <Row>
          <TrendingCampaigns campaigns={this.props.campaigns} />
        </Row>

        {/* The Latest Campaigns  */}
        <p className="p-2" />
        <h3>Latest Business</h3>
        <hr />
        <Row>
          <LatestCampaigns campaigns={this.props.campaigns} />
        </Row>

        {/* The upcoming Campaigns  */}
        <p className="p-2" />
        <h3>Business by Traction</h3>
        <hr />
        <Row>
          <UpcomingCampaigns campaigns={this.props.campaigns} />
        </Row>
      </Container>
    );
  }
}

const allPitchesDesign = {
  textAlign: "right",
};
export default HomeHeader;
