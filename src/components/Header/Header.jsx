import React from "react"
import HeaderImg from '../../assets/header.webp';
import "./Header.css";
const Header = () => (
  <div className="d4__header section__padding" id="home">
    <div className="d4__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something Amazing With
        <br />
      <span className="gradient__text"> D4-Community</span>
      </h1>
      <p>
      An open-source, student-driven organization committed to nurturing community growth.<br />
      Our mission is to inspire and facilitate communication and collaboration among members of the tech community, share best practices, and promote technical expertise.<br />
      We are dedicated to creating an inclusive environment that welcomes individuals of all skill levels, from absolute beginners to seasoned experts.
      </p>
    </div>

    <div className="d4__header-image">
      {" "}
     <img src={HeaderImg} alt="header img" />
    </div>
  </div>
);

export default Header;
