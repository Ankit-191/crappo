import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DigitalCurrency from "../assets/img/svg/currency.svg";
import Wallets from "../assets/img/svg/wallets.svg";
import Supported from "../assets/img/svg/supported.svg";
import CRAPPO from "../assets/img/webp/choosecrappo.webp";
import Btnblue from "./Btnblue";

const Chosecrypto = () => {
  return (
    <>
      <section className="bg_black position-relative crappoafter py-5 overflow-hidden">
        <Container>
          <Row className="py-5">
            <Col md={6} lg={4}>
              <div className="d-flex gap-4">
                <img src={DigitalCurrency} alt="Digital Currency Exchanged" />
                <div>
                  <p className="ff_rubik fw_700 fs_4xl text-white mb-1">$30B</p>
                  <p className="ff_rubik fw_400 fs_base clr_gray">
                    Digital Currency Exchanged
                  </p>
                </div>
              </div>
            </Col>
            <Col md={6} lg={4}>
              <div className="d-flex gap-4">
                <img src={Wallets} alt="Digital Currency Exchanged" />
                <div>
                  <p className="ff_rubik fw_700 fs_4xl text-white mb-1">10M+</p>
                  <p className="ff_rubik fw_400 fs_base clr_gray">
                    Trusted Wallets Investor
                  </p>
                </div>
              </div>
            </Col>
            <Col md={12} lg={4}>
              <div className="d-flex gap-4">
                <img src={Supported} alt="Digital Currency Exchanged" />
                <div>
                  <p className="ff_rubik fw_700 fs_4xl text-white mb-1">195</p>
                  <p className="ff_rubik fw_400 fs_base clr_gray">
                    Countries Supported
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="py-5 mt-lg-5 flex-column-reverse flex-lg-row">
            <Col lg={6}>
              <div className="crappobefore pe-lg-5 mt-5 mt-lg-0 text-center">
                <img src={CRAPPO} alt="CRAPPO" className="w_100" />
              </div>
            </Col>
            <Col lg={6} className="ps-lg-5">
              <p className="ff_rubik fw_700 fs_4xl text-white mb-3">
                Why you should choose CRAPPO
              </p>
              <p className="ff_rubik fw_400 fs_base clr_gray mb-4 pb-3 mw_400">
                Experience the next generation cryptocurrency platform. No
                financial borders, extra fees, and fake reviews.
              </p>
              <Btnblue textbtn="Learn More" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Chosecrypto;
