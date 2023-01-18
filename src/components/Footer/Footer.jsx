import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsDiscord,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="joinus" id="joinus">
      <div className="d4__footer section__padding">
        <div className="d4__footer-heading">
          <h1 className="gradient__text">
            Do you want to step in to the future.
          </h1>
        </div>
        <div className="d4__footer-links">
          <div className="d4__footer-links_logo">
            <img src={logo} alt="d4_logo" />
            <ul className="sci">
              <li>
                <a href="">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <BsDiscord />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="d4__footer-copyright">
          <p>@ D4-Community. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
