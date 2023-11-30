import React from "react";
import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Landing-Page/LandingPage";
//class based project
const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <LandingPage />
    </React.Fragment>
  );
};

export default App;
