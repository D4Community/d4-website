import React from "react";
import Feature from "../../components/Feature/Feature";
import "./WhatisD4.css";

const WhatisD4 = () => (
  <div className="d4__WhatisD4 section__margin" id="wd4">
    <div className="d4__WhatisD4-feature">
      <Feature
        title="What is D4?"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus id rerum hic, quo molestiae qui tenetur recusandae molestias voluptatum nesciunt voluptatibus sit. Nisi non consequatur accusantium laudantium ipsa cumque eaque sed magnam autem commodi!"
      />
    </div>
    <div className="d4__WhatisD4-heading">
      <h1 className="gradient__text">
        The possibilities are beyond your imagination
      </h1>
      <p>Explore the Feilds</p>
    </div>
    <div className="d4__WhatisD4-container">
      <Feature
        title="Descite"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus id rerum hic, quo molestiae qui tenetur"
      />
      <Feature
        title="Develop"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus id rerum hic, quo molestiae qui tenetur"
      />
      <Feature
        title="Debug"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus id rerum hic, quo molestiae qui tenetur"
      />
      <Feature
        title="Debug"
        text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus doloribus id rerum hic, quo molestiae qui tenetur"
      />
    </div>
  </div>
);

export default WhatisD4;
