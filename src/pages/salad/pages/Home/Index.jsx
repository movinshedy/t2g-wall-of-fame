import React from 'react'
import Hero from "../../components/Hero/Hero-section";
import Projects from '../../components/Projects/Projects';
import ContactSection from '../../components/Contact/Contact-section';
import AboutSection from '../../components/About/About-section';
import SkillSection from '../../components/Skills/SkillsSection';

function Index() {
  return (
    <div>
        <Hero/>
        <AboutSection/>
        <SkillSection/>
        <Projects/>
        <ContactSection/>
    </div>
  )
}

export default Index