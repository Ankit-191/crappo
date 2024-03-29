import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import heroimg from "../assets/img/webp/heroIllustration.webp";
import Header from "./Header";

const Hero = () => {
  return (
    <>
      <section className="bg_black overflow-hidden">
        <Container className="container">
          <div className="d-xl-flex flex-column h_100vh">
            <Header />
            <div className="flex-grow-1 d-xl-flex align-items-xl-center">
              <Row className="align-items-center h_100 pb-lg-5">
                <Col lg={6}>
                  <button className="ff_rubik fw_400 fs_base text-white border-0 rounded-pill pe-2 px-1 py-1 bg_lightblack mb-lg-4 mb-2">
                    <button className="ff_rubik fw_400 fs_base text-black border-0 py-1 px-3 rounded-pill me-3">
                      75% SAVE
                    </button>
                    For the Black Friday weekend
                  </button>
                  <p className="ff_rubik fw_700 fs_6xl text-white mb-lg-4 mb-2">
                    Fastest & secure platform to invest in crypto
                  </p>
                  <p className="ff_rubik fw_400 fs_base clr_gray mw_400  mb-lg-4 mb-2">
                    Buy and sell cryptocurrencies, trusted by 10M wallets with
                    over $30 billion in transactions.
                  </p>
                  <button className="ff_rubik fw_500 fs_md text-white bg_blue border-0 py-lg-3 px-lg-4 p-2 mt-2 rounded-pill">
                    Try for FREE
                    <svg
                      className="ms-lg-4 ms-2"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="16" cy="16" r="16" fill="white" />
                      <path
                        d="M14.4999 21.0002C14.3683 21.0009 14.2379 20.9757 14.116 20.9259C13.9942 20.8762 13.8834 20.8029 13.7899 20.7102C13.6962 20.6172 13.6218 20.5066 13.571 20.3848C13.5203 20.2629 13.4941 20.1322 13.4941 20.0002C13.4941 19.8682 13.5203 19.7375 13.571 19.6156C13.6218 19.4937 13.6962 19.3831 13.7899 19.2902L17.0999 16.0002L13.9199 12.6902C13.7337 12.5028 13.6291 12.2494 13.6291 11.9852C13.6291 11.721 13.7337 11.4675 13.9199 11.2802C14.0129 11.1864 14.1235 11.1121 14.2454 11.0613C14.3672 11.0105 14.4979 10.9844 14.6299 10.9844C14.762 10.9844 14.8927 11.0105 15.0145 11.0613C15.1364 11.1121 15.247 11.1864 15.3399 11.2802L19.1999 15.2802C19.3832 15.4671 19.4858 15.7184 19.4858 15.9802C19.4858 16.2419 19.3832 16.4932 19.1999 16.6802L15.1999 20.6802C15.1102 20.7771 15.0021 20.8553 14.882 20.9102C14.7618 20.9651 14.632 20.9957 14.4999 21.0002Z"
                        fill="#3671E9"
                      />
                    </svg>
                  </button>
                </Col>
                <Col lg={6}>
                  <div className="position-relative heroshadow text-center">
                    <img src={heroimg} alt="Illustration" className="w_100" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
