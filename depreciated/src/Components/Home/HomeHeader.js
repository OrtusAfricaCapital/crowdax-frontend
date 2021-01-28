import React, { Component } from "react";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
  Badge,
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Card,
  CardGroup,
  Container,
} from "react-bootstrap";
import search_icon from "../../assests/search_icon.png";
import download from "../../assests/download.svg";
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
                    <img src={search_icon} width="30px" height="30px" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroup"
                  placeholder="Discover vaible businesses"
                />
              </InputGroup>
            </Form>
          </Col>
        </Row>
        <p />
        <Row>
          <Col md={{ span: 5, offset: 5 }}>
            <Button variant="secondary">Search </Button>{" "}
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
          <Col xs align="center">
            <h4>Featured Investment</h4>
            <h3>the97Fund</h3>
          </Col>
          <Col xs align="center">
            <h4>Total Investment</h4>
            <h2>399</h2>
          </Col>
          <Col xs align="center">
            <h4>Funded Projects</h4>
            <h2>41</h2>
          </Col>
          <Col xs align="center">
            <h4>Live Campaigns</h4>
            <h2>15</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <DropdownButton
              as={ButtonGroup}
              title="Sort By"
              id="bg-vertical-dropdown-1"
              style={{ width: "10rem" }}
            >
              <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
              <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomeHeader;
