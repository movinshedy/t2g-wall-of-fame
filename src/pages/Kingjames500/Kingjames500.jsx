import React from "react";
import Hero from "./component/Hero/HeroSection";
import About from "./component/About/About";
import Technologies from "./component/Technologies/Technologies";

import Projects from "./component/MyProjects/Projects";
import Contacts from "./component/Contacts/Contacts";
function Kingjames500() {
  return (
    <React.Fragment>
      <Hero />
      <Technologies />
      <Projects />
      <About />
      {/* <Contacts /> */}
    </React.Fragment>
  )
}

export default Kingjames500