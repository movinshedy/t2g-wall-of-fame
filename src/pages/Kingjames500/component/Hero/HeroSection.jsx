import heroImg from "../../images/hero-profile.jpg";
import {
  HeroCard,
  HeroTitle,
  Heroimg,
  HeroContainer,
} from "../../Styled/Hero.styled";
import Title from "../Title/Title";

function HeroSection() {
  return (
    <HeroContainer>
      <Title subTitle="Building engaging digital experiences that inspire and connect." />
      <HeroCard>
        <HeroTitle>
          <h3>
            hi, i'm james maina, <br />
            creative technologist
          </h3>
          <p>
            I'm a software engineer based in Nairobi, Kenya. I specialize in
            building exceptional digital experiences for the web.
          </p>
          <p>
            With a passion for innovation and a keen eye for detail, I strive to
            create solutions that not only meet but exceed user expectations.
          </p>
          <button>check my resume</button>
        </HeroTitle>
        <Heroimg src={heroImg} alt="kingjamesImage" />
      </HeroCard>
    </HeroContainer>
  );
}

function Hero() {
  return (
    <dir>
      <HeroSection />
    </dir>
  );
}

export default Hero;
