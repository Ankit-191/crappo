import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/img/svg/Logo.png";
import Btnblue from "./Btnblue";
import { RiMenu4Fill } from "react-icons/ri";
const Header = () => {
  const [head, sethead] = useState(true);
  function showUl() {
    sethead(!head);
  }
  if (!head) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
  return (
    <>
      <section className="bg_black">
        <Container>
          <div className="d-flex justify-content-between py-lg-5 py-4">
            <div className="d-flex align-items-center gap-3">
              <img src={logo} alt="crappo" />
              <a href="#" className="ff_inter fw_600 fs_md text-white">
                CRAPPO
              </a>
            </div>
            <div onClick={showUl} className="z_30">
              <span className="d-block d-lg-none fs_3xl text-white">
                <RiMenu4Fill />
              </span>
            </div>
            <div
              className={`d-flex align-items-center justify-content-center phone ${
                head ? "" : "left_0 text-center"
              }`}
              onClick={() => sethead(true)}
            >
              <ul className="d-flex gap_32 mt-1 flex-column flex-lg-row headhover">
                <li onClick={() => sethead(true)}>
                  <a href="#" className="ff_rubik fw_400 fs_base text-white">
                    Products
                  </a>
                </li>
                <li onClick={() => sethead(true)}>
                  <a href="#" className="ff_rubik fw_400 fs_base text-white">
                    Features
                  </a>
                </li>
                <li onClick={() => sethead(true)}>
                  <a href="#" className="ff_rubik fw_400 fs_base text-white">
                    About
                  </a>
                </li>
                <li onClick={() => sethead(true)}>
                  <a href="#" className="ff_rubik fw_400 fs_base text-white">
                    Contact
                  </a>
                </li>
                <ul className="d-flex flex-column flex-lg-row gap-4 ps-0 ps-lg-4">
                  <li onClick={() => sethead(true)}>
                    <a
                      href="#"
                      className="ff_rubik fw_400 fs_base text-white me-lg-3 me-0"
                    >
                      Login
                    </a>
                  </li>
                  <li className="beforeline position-relative ps-lg-4 ps-0">
                    <Btnblue textbtn="Register" />
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Header;
