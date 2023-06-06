import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Btnblue from "./Btnblue";
import Bitcoin from "../assets/img/svg/logos_bitcoin.svg";
import graph from "../assets/img/svg/tradegraph.svg";
const Market = () => {
  return (
    <>
      <section className="bg_secondaryblue py-sm-5 position-relative Oshadow">
        <Container className="container py-sm-5">
          <p className="ff_rubik fw_700 fs_4xl text-white mb-3 mb-lg-5 text-center">
            Market sentiments, portfolio, and run
            <span className="d-lg-block">
              the infrastructure of your choice
            </span>
          </p>
          <Row className=" align-items-center py-sm-5 mb-sm-5">
            <Col lg={5}>
              <p className="ff_rubik fw_700 fs_3xl text-white mb-lg-4 mb-2">
                Invest Smart
              </p>
              <p className="ff_rubik fw_400 fs_base text-white mb-4 pb-lg-2 mw_400">
                Get full statistic information about the behaviour of buyers and
                sellers will help you to make the decision.
              </p>
              <Btnblue textbtn="Learn More" />
            </Col>
            <Col lg={7}>
              <div className="p-3 p-sm-5 clr_35068C mx-lg-5 mt-4 mt-lg-0 cardbr_16 position-relative">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex gap-1 gap-sm-3">
                    <img src={Bitcoin} alt="" className="w-25" />
                    <div>
                      <p className="ff_rubik fw_700 fs_3xl text-white mb-0">
                        Bitcoin
                        <span className="fw_500 fs_md clr_neturalgray4 ms-2">
                          BTC
                        </span>
                      </p>
                      <p className=" ff_rubik fw_400 fs_sm text-white mb-0">
                        0.00080 BTC
                      </p>
                    </div>
                  </div>
                  <p className=" ff_inter fw_500 fs_sm clr_info">+125%</p>
                </div>
                <img src={graph} alt="graph" className="w-100" />
                <div className="d-flex gap-1 justify-content-between">
                  <div className="cardbr_16 bg_increase py-4 px-3 position_absolutetrand left_64 w_178">
                    <p className="ff_inter fw_600 fs_xl text-white mb-1 mb-sm-4">
                      Increase in <br /> Trade
                    </p>
                    <p className="ff_inter fw_700 fs_2xl text-white mb-1 mb-sm-4">
                      +75%
                      <svg
                        className="ms-3"
                        width="14"
                        height="12"
                        viewBox="0 0 14 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7102 5.2899L7.71019 0.289896C7.61508 0.198856 7.50294 0.127491 7.38019 0.0798963C7.13672 -0.0201217 6.86365 -0.0201217 6.62019 0.0798963C6.49743 0.127491 6.38529 0.198856 6.29019 0.289896L1.29019 5.2899C1.19695 5.38314 1.12299 5.49383 1.07253 5.61565C1.02207 5.73747 0.996094 5.86804 0.996094 5.9999C0.996094 6.2662 1.10188 6.52159 1.29019 6.7099C1.47849 6.8982 1.73388 7.00399 2.00019 7.00399C2.26649 7.00399 2.52188 6.8982 2.71019 6.7099L6.00019 3.4099V10.9999C6.00019 11.2651 6.10554 11.5195 6.29308 11.707C6.48062 11.8945 6.73497 11.9999 7.00019 11.9999C7.2654 11.9999 7.51976 11.8945 7.70729 11.707C7.89483 11.5195 8.00019 11.2651 8.00019 10.9999V3.4099L11.2902 6.7099C11.3831 6.80363 11.4937 6.87802 11.6156 6.92879C11.7375 6.97956 11.8682 7.0057 12.0002 7.0057C12.1322 7.0057 12.2629 6.97956 12.3848 6.92879C12.5066 6.87802 12.6172 6.80363 12.7102 6.7099C12.8039 6.61693 12.8783 6.50633 12.9291 6.38447C12.9798 6.26261 13.006 6.13191 13.006 5.9999C13.006 5.86789 12.9798 5.73718 12.9291 5.61532C12.8783 5.49346 12.8039 5.38286 12.7102 5.2899Z"
                          fill="#FD8589"
                        />
                      </svg>
                    </p>
                    <p className="ff_inter fw_400 fs_base text-white mb-0">
                      Sell option
                    </p>
                  </div>
                  <div className="cardbr_16 bg_increase py-4 px-sm-3 position_absolutetrand right_56 text-center w_178">
                    <p className="mb-1 ff_inter fw_700 fs_2xl text-white">
                      $15.32
                    </p>
                    <p className="mb-0 ff_inter fw_400 fs_base text-white">
                      Price in dollar
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Market;
