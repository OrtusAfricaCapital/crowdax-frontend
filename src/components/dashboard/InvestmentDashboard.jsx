import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export class InvestmentDashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      investors:{
        totalAmount: 1234,
        totalInvestors: 1234
      },
      companyDetails:{
        name: "CompanyName",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis dolores ducimus nesciunt et voluptatibus quae corrupti beatae voluptates numquam temporibus alias rerum, accusantium aut animi nulla est! Autem, impedit aliquid.",
        image: "https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65",
        video: "https://www.youtube.com/embed/ySOKrCusEjw",
        Location: "Kampala",
        Website: "www.investment.com"
      },
      Team:{
        Name: "Weira Wanda",
        position: "Intern",
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, quia autem similique illum dolores deserunt."
      },
      NoticableInvestor:{
        name:"Name",
        details: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, aut?"
      }
      
    };
  }
  render() {
    return (
      <div>
        <Container className="mt-4 mb-5">
          <Row>
            <Col md={6} sm={12}>
              <img
                width="500"
                height="300"
                src={this.state.companyDetails.image}
                alt=""
              />
            </Col>
            <Col md={6} sm={12}>
              <h3>{this.state.companyDetails.name}</h3>

              <p>{this.state.companyDetails.description}</p>
              <Row>
                <Col>
                  <p>Total Raised</p>
                  <p>{this.state.investors.totalAmount}</p>
                </Col>
                <Col>
                  <p>Total Investors</p>
                  <p>{this.state.investors.totalInvestors}</p>
                </Col>
              </Row>
              <Button variant="primary" size="lg" block>
                Invest Now
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
          <h5>Detailed explanation of the StartUp</h5>
          <p>{this.state.companyDetails.description}</p>
          <p>{this.state.companyDetails.description}</p>
          <p>{this.state.companyDetails.description}</p>
            
          </Row>
          <div className="mt-4 mb-5">
            <h5>Overview</h5>
            <Row>
              <Col>
                <p>Location: </p>
              </Col>
              <Col>
                <p>{this.state.companyDetails.Location}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Website: </p>
              </Col>
              <Col>
                <p>{this.state.companyDetails.Website}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Social Media: </p>
              </Col>
              <Col>
                <p>Facebook</p>
              </Col>
            </Row>
          </div>
          <Row className="mt-4 mb-5">
            <div>
              <h5>Video explanation of the StartUp</h5>
              <iframe
                width="700"
                height="300"
                src={this.state.companyDetails.video}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </Row>
          <Row className="mt-4 mb-5">
            <div>
              <h5>The Team</h5>
              <Row>
                <Col md={4}>
                  <img
                    width="350"
                    height="200"
                    src={this.state.companyDetails.image}
                    alt=""
                  />
                </Col>
                <Col md={8}>
                  <h5>Name: <span>{this.state.Team.Name}</span></h5>
                  <p>Position: <span>{this.state.Team.position}</span></p>
                  <p>Bio: <span>{this.state.Team.bio}</span></p>
                   
                </Col>
              </Row>
              <Row className="mt-4 mb-5">
                <Col md={4}>
                  <img
                    width="350"
                    height="200"
                    src={this.state.companyDetails.image}
                    alt=""
                  />
                </Col>
                <Col md={8}>
                <h5>Name: <span>{this.state.Team.Name}</span></h5>
                  <p>Position: <span>{this.state.Team.position}</span></p>
                  <p>Bio: <span>{this.state.Team.bio}</span></p>
                </Col>
              </Row>
            </div>
          </Row>
          <Row>
            <div>
              <h5>Noticable Investors</h5>
              <Row>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src={this.state.companyDetails.image}
                    alt=""
                  />
                  <p>{this.state.NoticableInvestor.name}</p>
                  <p>{this.state.NoticableInvestor.details}</p>
                </Col>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src={this.state.companyDetails.image}
                    alt=""
                  />
                  <p>{this.state.NoticableInvestor.name}</p>
                  <p>{this.state.NoticableInvestor.details}</p>
                </Col>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src={this.state.companyDetails.image}
                    alt=""
                  />
                  <p>{this.state.NoticableInvestor.name}</p>
                  <p>{this.state.NoticableInvestor.details}</p>
                </Col>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src={this.state.companyDetails.image}
                    alt=""
                  />
                  <p>{this.state.NoticableInvestor.name}</p>
                  <p>{this.state.NoticableInvestor.details}</p>
                </Col>

              </Row>
            </div>
          </Row>
        </Container>
      </div>
    );
  }
}

export default InvestmentDashboard;
