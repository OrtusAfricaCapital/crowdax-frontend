import React, { Component } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";

export class InvestmentDashboard extends Component {
  state = {
    company_name: "Wanda Advocates",
    short_description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident tempore facilis adipisci ullam, ipsa laudantium perspiciatis corrupti blanditiis ab! ",
  };

  render() {
    return (
      <div>
        <Container className="mt-4 mb-5">
          <Row>
            <Col md={6} sm={12}>
              <img
                width="500"
                height="300"
                src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                alt=""
              />
            </Col>
            <Col md={6} sm={12}>
              <h3>{this.state.company}</h3>

              <p>{this.state.short_description}</p>
              <Row>
                <Col>
                  <p>Total Raised</p>
                  <p>100005453</p>
                </Col>
                <Col>
                  <p>Total Investors</p>
                  <p>10000</p>
                </Col>
              </Row>
              <Button variant="primary" size="lg" block>
                Invest Now
              </Button>
            </Col>
          </Row>
          <Row className="mt-5">
            <h5>Detailed explanation of the StartUp</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              commodi tempora mollitia officiis blanditiis doloribus eveniet
              vero quasi rem beatae impedit nulla est nobis fugit laboriosam
              minima, atque eum incidunt ipsa esse veniam sapiente eius porro.
              Voluptatibus quam vel ipsum tempore quia ab tenetur? Possimus
              nulla dolorum assumenda sunt reprehenderit dolore placeat error
              dolor nisi dignissimos est exercitationem ex, recusandae aliquid,
              excepturi minima quibusdam non quas earum dolores eius numquam
              quae libero aliquam. Voluptate quia dolorum vero eos fugiat
              perferendis.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              commodi tempora mollitia officiis blanditiis doloribus eveniet
              vero quasi rem beatae impedit nulla est nobis fugit laboriosam
              minima, atque eum incidunt ipsa esse veniam sapiente eius porro.
              Voluptatibus quam vel ipsum tempore quia ab tenetur? Possimus
              nulla dolorum assumenda sunt reprehenderit dolore placeat error
              dolor nisi dignissimos est exercitationem ex, recusandae aliquid,
              excepturi minima quibusdam non quas earum dolores eius numquam
              quae libero aliquam. Voluptate quia dolorum vero eos fugiat
              perferendis.
            </p>
          </Row>
          <div className="mt-4 mb-5">
            <h5>Overview</h5>
            <Row>
              <Col>
                <p>Location: </p>
              </Col>
              <Col>
                <p>Kampala</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p>Website: </p>
              </Col>
              <Col>
                <p>www.blabla.com</p>
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
                src="https://www.youtube.com/embed/ySOKrCusEjw"
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
                    src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                    alt=""
                  />
                </Col>
                <Col md={8}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor quisquam porro at architecto distinctio.
                  </p>
                </Col>
              </Row>
              <Row className="mt-4 mb-5">
                <Col md={4}>
                  <img
                    width="350"
                    height="200"
                    src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                    alt=""
                  />
                </Col>
                <Col md={8}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi dolor quisquam porro at architecto distinctio.
                  </p>
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
                    src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                    alt=""
                  />
                </Col>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                    alt=""
                  />
                </Col>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                    alt=""
                  />
                </Col>
                <Col md={3}>
                  <img
                    width="250"
                    height="200"
                    src="https://seedrs.imgix.net/uploads/startup/section_image/image/26632/pz5736ku29c2s7ewnul2xomi0ces9wz/Seedrs_embedded-images-1-1300x750px.png?rect=0%2C6%2C1300%2C749&w=895&fit=clip&auto=compress&q=90&s=b440131b0676e6cb03463a4a39132f65"
                    alt=""
                  />
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
