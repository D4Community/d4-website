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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia ab cum
        asperiores consequatur corporis reprehenderit, accusantium laudantium
        laboriosam saepe explicabo ullam velit quasi iure repudiandae!
      </p>
    </div>

    <div className="d4__header-image">
      {" "}
     <img src={HeaderImg} alt="header img" />
    </div>
  </div>
);

export default Header;
