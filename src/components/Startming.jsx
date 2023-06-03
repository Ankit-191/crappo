import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Startming = () => {
  return (
    <>
      <section className="bg_startmining py-5 lineshadow position-relative overflow-hidden">
        <Container className="container py-lg-5">
          <div className=" bg_blue startbr_16 p-2 p-sm-5 position-relative start">
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="ff_rubik fw_700 fs_3xl text-white">
                  Start mining now
                </p>
                <p className="ff_rubik fw_400 fs_base text-white mw_400">
                  Join now with CRAPPO to get the latest news and start mining
                  now
                </p>
              </Col>
              <Col lg={6}>
                <div className="email d-flex gap-4">
                  <input type="email" placeholder="Enter your email" />
                  <button className="ff_rubik fw_500 fs_md clr_black border-0 btn_subscribe rounded-pill">
                    Subscribe
                  </button>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Startming;
