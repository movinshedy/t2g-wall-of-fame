import React from "react";
import Hero from "./Hero/Hero";
import Contacts from "./Contacts/Contacts";
import Project from "./Project/Project";
import About from "./About/About";
import Skills from "./Skills/Skills";
function Portfolio() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contacts />
    </>
  );
}

export default Portfolio;
