import { Link } from "react-router-dom";
import heroImg from "../../assets/hero-img.jpg";
import {
  StyledHero,
  HeroTitle,
  HeroTextBox,
  StyledHeroImg,
} from "./styled/Hero.styled";

function Hero() {
  return (
    <StyledHero>
      <div>
        <HeroTitle>Teach2Give wall of fame</HeroTitle>
        <HeroTextBox>
          <p>
            Portfolio sites for software developers that are currently
            undergoing or have already undergone the intensive 3 month
            Teach2Give software development bootcamp.
          </p>
          <Link>See all engineers</Link>
        </HeroTextBox>
      </div>
      <StyledHeroImg
        src={heroImg}
        alt="two ladies looking at code on a laptop"
      />
    </StyledHero>
  );
}

export default Hero;
