import {
  TechnologiesCard,
  ImgCard,
  TechnologiesContainer,
  TechnologiesSection
} from "../../Styled/Technologies.styled";
import Title from "../Title/Title";
import technologies from "../../data/Technologies";

function TechnologiesIllustration({ logo, title, description }) {
  return (
    <TechnologiesCard>
      <ImgCard>
        <img src={logo} alt={title} />
      </ImgCard>
      <h2>{title}</h2>
      <p>{description}</p>
    </TechnologiesCard>
  );
}

function Technologies() {
  return (
    <TechnologiesSection>
      <Title
        mainTitle="Tech Stack & Skills"
        subTitle="Tools and technologies I use to build exceptional digital experiences."
      />
      <TechnologiesContainer>
        {technologies.map((tech, index) => (
          <TechnologiesIllustration
            key={index}
            logo={tech.logo}
            title={tech.title}
            description={tech.description}
          />
        ))}
      </TechnologiesContainer>
    </TechnologiesSection>
  );
}

export default Technologies;
