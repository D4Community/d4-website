import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.png";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsTwitter,
  BsDiscord,
  BsWhatsapp,
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
                <a href="https://github.com/D4Community">
                  <BsGithub />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/d4community/">
                  <BsLinkedin />
                </a>
              </li>
              <li>
                <a href="https://instagram.com/d4community?igshid=ZDdkNTZiNTM=">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/D4Community?t=-nRvMKmdNW-4wWkMY0IuCA&s=09">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="https://discord.gg/bCs4cpw9VS">
                  <BsDiscord />
                </a>
              </li>
              <li>
                <a href="https://chat.whatsapp.com/Khwy3LEyjdX4Kx8VJ1MXmW">
                  <BsWhatsapp />
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
