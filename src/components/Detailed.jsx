import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import details from "../assets/img/webp/Statistic.webp";
import Btnblue from "./Btnblue";
const Detailed = () => {
  return (
    <>
      <section className="position-relative bg_secondaryblue py-5">
        <Container className="container">
          <Row className="align-items-center h_453 flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div className="position_absolute start-0 translate_middley top-50 mw_710 mt-4 mt-lg-0">
                <img src={details} alt="" className="w_80" />
              </div>
            </Col>
            <Col lg={6}>
              <p className="ff_rubik fw_700 fs_3xl text-white mb-lg-4 mb-2">
                Detailed Statistics
              </p>
              <p className="ff_rubik fw_400 fs_base text-white mb-4 pb-lg-2 mw_400">
                View all mining related information in realtime, at any point at
                any location and decide which polls you want to mine in.
              </p>
              <Btnblue textbtn="Learn More" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Detailed;
