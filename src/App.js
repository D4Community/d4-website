import React from "react";
import "./App.css";
import Members from "./components/Members/Members";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import WhatisD4 from "./components/WhatisD4/WhatisD4";
import UpcomingEvents from "./components/Upcoming Events/UpcomingEvents";
import Footer from "./components/Footer/Footer";
import GoToTop from "./components/GoToTop/GoToTop"; 
import { ThemeProvider } from 'styled-components';

const theme = {
  btn: {
    backgroundColor: '#000',
  },
  colors: {
    shadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  },
  media: {
    mobile: '768px',
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <WhatisD4 />
          <Members /> 
          <UpcomingEvents />
          <GoToTop />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

// const App = () => {

//   return (
//     <div className="App">
//       <div className="gradient__bg">
//         <Navbar />
//         <Header />
//         <WhatisD4 />
//         <Members/> 
//         <UpcomingEvents/>
//         <GoToTop />
//         <Footer/>
//       </div>
//     </div>
//   );
// };
