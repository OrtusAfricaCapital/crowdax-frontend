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
import sort_icon from "../../assests/sort_white.svg";
import Headlines from "../home/Headlines";
export class HomeHeader extends Component {
  state = {
    headlines: [
      { id: 1, heading: "Featured Project", content: "the97Fund" },
      { id: 2, heading: "Total Investment", content: 323 },
      { id: 3, heading: "Funded Projects", content: 100 },
      { id: 4, heading: "Live Campaigns", content: 322 },
    ],
  };
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
                  placeholder="Invest in a business"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <p />
        <Row>
          <Col md={{ span: 5, offset: 5 }}>
            <Button variant="info" size="lg">
              Search{" "}
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
        <Row>
          <Headlines headlines={this.state.headlines} />
        </Row>
        <p className="p-2" />
        <Row>
          <Col sm={9}>
            <DropdownButton
              id="bg-vertical-dropdown-1"
              as={ButtonGroup}
              variant="info"
              size="lg"
              drop="right"
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col sm={3}>
            <Button Badge variant="info" size="lg">
              Active Campaigns
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeHeader;
