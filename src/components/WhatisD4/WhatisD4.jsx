import React from "react";
import Feature from "../../components/Feature/Feature";
import "./WhatisD4.css";

const WhatisD4 = () => (
  <div className="d4__WhatisD4 section__margin" id="whatisd4">
    <div className="d4__WhatisD4-feature">
      <Feature
        title="What is D4?"
        text="D4 community is a Open-Source student driven organization that was established by Students, focusing on growing TOGETHER as a community, encouraging and promoting communication, collaboration between members of the tech community, best practices, and technical expertise for both absolute beginners and Experts in an Inclusive environment."
      />
    </div>
    <div className="d4__WhatisD4-heading">
      <h1 className="gradient__text">
      Join us, as D4 is the best community to join for your journey into tech.
      </h1>
      <p>Explore the Fields</p>
    </div>
    <div className="d4__WhatisD4-container">
      <Feature
        title="Discite"
        text="Develop Skills!! This is the first step in your journey. Learn the basics of programming and get a solid foundation."
      />
      <Feature
        title="Develop"
        text="Build it!! Time to turn your dreams and ideas into reality by writing the code and creating your tech masterpiece."
      />
      <Feature
        title="Debug"
        text="Fix it!! When things inevitably go haywire, you identify errors, issues and finally hunt down and fix those bugs."
      />
      <Feature
        title="Deploy"
        text="Share it!! After your creation is polished and perfected, deploy it to the world, making it accessible to users."
      />
    </div>
  </div>
);

export default WhatisD4;
