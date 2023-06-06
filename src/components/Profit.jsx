import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ethereum from "../assets/img/svg/ethereum.svg";
import litecoin from "../assets/img/svg/litecoin.svg";
import Bitcoin from "../assets/img/svg/logos_bitcoin.svg";
import Btnblue from "./Btnblue";

const Profit = () => {
  return (
    <>
      <section className="position-relative bg_secondaryblue py-lg-5 oshadowafter">
        <Container className="container">
          <Row className="py-lg-5 align-items-center">
            <Col lg={6}>
              <p className="ff_rubik fw_700 fs_3xl text-white  mb-lg-4 mb-2">
                Grow your profit and track your investments
              </p>
              <p className="ff_rubik fw_400 fs_base text-white mb-4 pb-lg-2 mw_400">
                Use advanced analytical tools. Clear TradingView charts let you
                track current and historical profit investments.
              </p>
              <Btnblue textbtn="Learn More" />
            </Col>
            <Col lg={6}>
              <div className="pricechange py-4 mt-4 mt-lg-0">
                <Row className="px-2 ps-5">
                  <Col xs={4}></Col>
                  <Col xs={2}>
                    <p className="ff_inter fw_600 fs_sm text-white mb-0 text-center">
                      Price
                    </p>
                  </Col>
                  <Col xs={2}>
                    <p className="ff_inter fw_600 fs_sm text-white mb-0 text-end">
                      Change
                    </p>
                  </Col>
                  <Col xs={3}>
                    <p className="ff_inter fw_600 fs_sm text-white mb-0 text-end">
                      Volume (24h)
                    </p>
                  </Col>
                </Row>
                <div className="d-flex align-items-center justify-content-between py-3 pricechangepadding">
                  <div className="d-flex gap-3">
                    <img src={Bitcoin} alt="" className="w-25" />
                    <div>
                      <p className="ff_inter fw_700 fs_xl text-white mb-0">
                        BTC
                      </p>
                      <p className=" ff_inter fw_400 fs_base clr_F2F2F2 mb-0">
                        Bitcoin
                      </p>
                    </div>
                  </div>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">$6750</p>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">
                    <svg
                      className="me-2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="8"
                        cy="8.00024"
                        r="8"
                        fill="#8FFFBE"
                      />
                      <path
                        d="M11.3878 9.72888L8.1808 6.01013C8.08901 5.90369 7.91225 5.90369 7.81948 6.01013L4.61244 9.72888C4.4933 9.86755 4.60073 10.0707 4.79311 10.0707H11.2072C11.3996 10.0707 11.507 9.86755 11.3878 9.72888Z"
                        fill="#8FFFBE"
                      />
                    </svg>
                    +7.3%
                  </p>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">
                    $3420214
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between bg_eth pricechangepadding position_relative left_neg72">
                  <div className="d-flex gap-3">
                    <img src={ethereum} alt="" className="w-25" />
                    <div>
                      <p className="ff_inter fw_700 fs_xl text-white mb-0">
                        ETH
                      </p>
                      <p className=" ff_inter fw_400 fs_base clr_F2F2F2 mb-0">
                        Ethereum
                      </p>
                    </div>
                  </div>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">$156.83</p>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">
                    <svg
                      className="me-2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="8"
                        cy="8.00012"
                        r="8"
                        fill="#FF7676"
                      />
                      <path
                        d="M11.2072 5.92981H4.79311C4.60073 5.92981 4.4933 6.13293 4.61244 6.27161L7.81948 9.99036C7.91127 10.0968 8.08803 10.0968 8.1808 9.99036L11.3878 6.27161C11.507 6.13293 11.3996 5.92981 11.2072 5.92981Z"
                        fill="#FF7676"
                      />
                    </svg>
                    -0.9%
                  </p>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">
                    $1812350
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-between pricechangepadding">
                  <div className="d-flex gap-3">
                    <img src={litecoin} alt="" className="w-25" />
                    <div>
                      <p className="ff_inter fw_700 fs_xl text-white mb-0">
                        LTC
                      </p>
                      <p className=" ff_inter fw_400 fs_base clr_F2F2F2 mb-0">
                        Litecoin
                      </p>
                    </div>
                  </div>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">$8535</p>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">
                    <svg
                      className="me-2"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        opacity="0.1"
                        cx="8"
                        cy="8.00024"
                        r="8"
                        fill="#8FFFBE"
                      />
                      <path
                        d="M11.3878 9.72888L8.1808 6.01013C8.08901 5.90369 7.91225 5.90369 7.81948 6.01013L4.61244 9.72888C4.4933 9.86755 4.60073 10.0707 4.79311 10.0707H11.2072C11.3996 10.0707 11.507 9.86755 11.3878 9.72888Z"
                        fill="#8FFFBE"
                      />
                    </svg>
                    +8.2%
                  </p>
                  <p className=" ff_inter fw_400 fs_base clr_F2F2F2">
                    $5820399
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Profit;
