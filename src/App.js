import React from "react";
// import Slider from "react-slick";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Founders from "./components/Foundes/Founders";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import WhatisD4 from "./components/WhatisD4/WhatisD4";
// import Slider from "./components/Slider/Slider";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <WhatisD4 />
        {/* <Slider /> */}
        <Founders/>
        <Cards/>
      </div>
    </div>
  );
};

export default App;
