import React from "react";
// import people from '../../assets/people.png';
import Spline from "@splinetool/react-spline";
// import globe from '../../assets/globe-500.h264.gif';
import "./Header.css";
const Header = () => (
  <div className="d4__header section__padding" id="home">
    <div className="d4__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with
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
      <Spline scene="https://prod.spline.design/lEwM4nvkbtM9sUdJ/scene.splinecode" />
    </div>
  </div>
);

export default Header;
