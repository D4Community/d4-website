import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./Navbar.css";
import logo from "../../assets/logo.png";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="d4_navbar">
      <div className="d4_navbar_links">
        <div className="d4_navbar_links_logo">
          <img src={logo} alt="" />
        </div>
        <div className="d4_navbar_links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#whatisd4">What is D4</a>
          </p>
          <p>
            <a href="#members">Members</a>
          </p>
          <p>
            <a href="#events">Events</a>
          </p>
        </div>
      </div>
      <div className="d4_navbar_joinus">
        <button type="button">
          <a href="#joinus">Join us</a>
        </button>
      </div>
      <div className="d4_navbar_menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="d4_navbar_menu_container scale_up_center">
            <div className="d4_navbar_menu_container_links">
              {" "}
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#whatisd4">What is D4</a>
              </p>
              <p>
              <a href="#members">Members</a>
              </p>
              <p>
                <a href="#events">Events</a>
              </p>
            </div>
            <div className="d4_navbar_menu_container_links_joinus">
              <button type="button">
                <a href="#joinus">Join us</a>
              </button>{" "}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
