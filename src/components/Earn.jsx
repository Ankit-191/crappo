import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Btnblue from "./Btnblue";

const Earn = () => {
  return (
    <>
      <section className="bg_black pt-5 h_457 position-relative">
        <Container className="container pt-lg-5">
          <div className="text-center">
            <p className="ff_rubik fw_700 fs_4xl text-white">
              Check how much you can earn
            </p>
            <p className="ff_rubik fw_400 fs_md clr_gray mb-0">
              Let’s check your hash rate to see how much you will earn today,
              <span className="d-md-block">
                Exercitation veniam consequat sunt nostrud amet.
              </span>
            </p>
          </div>
          <div className="w_942 bg_FBFCFE position-absolute bottom-0 start-50 translate-middle-x br_16 p-3 p-sm-5">
            <Row>
              <Col sm={6}>
                <p className="ff_rubik fw_400 fs_xl clr_black border_b mb-0 pb-1">
                  Enter your hash rate
                </p>
              </Col>
              <Col sm={3}>
                <div className="enterrate border_b pb-2 my-4 my-sm-0">
                  <select name="hashrate" id="hashrate">
                    <option value="TH/s">TH/s</option>
                    <option value="TH/s">TH/s</option>
                    <option value="TH/s">TH/s</option>
                    <option value="TH/s">TH/s</option>
                  </select>
                </div>
              </Col>
              <Col sm={3} className="text-center text-sm-end">
                <Btnblue textbtn="Calculate" />
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Earn;
