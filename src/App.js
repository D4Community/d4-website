import React from "react";
import "./App.css";
import Members from "./components/Members/Members";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import WhatisD4 from "./components/WhatisD4/WhatisD4";
import UpcomingEvents from "./components/Upcoming Events/UpcomingEvents";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <WhatisD4 />
        <Members/> 
        <UpcomingEvents/>
        <Footer/>
      </div>
    </div>
  );
};

export default App;
