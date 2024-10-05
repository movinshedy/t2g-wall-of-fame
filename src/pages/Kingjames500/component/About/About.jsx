import Title from "../Title/Title";
import kingjames from "../../../../assets/kingjames500-headshot.jpg";
import { AboutMeCard, AboutMeContainer } from "../../Styled/About.styled";

function AboutMe() {
  return (
    <AboutMeCard>
      <img src={kingjames} alt="Hero about image" />
      <p>
        Hi, I’m James Maina, a creative technologist and software engineer based
        in Nairobi, Kenya. I specialize in building high-quality digital
        experiences, from concept to deployment. With a strong foundation in web
        development and a passion for innovation, I enjoy creating solutions
        that are not only functional but also intuitive and user-centered. Over
        the years, I’ve worked with various clients and teams, honing my skills
        in front-end and back-end development. I’m constantly exploring new
        technologies and pushing the boundaries of what’s possible in the
        digital world. Whether it’s crafting seamless user interfaces,
        optimizing web performance, or solving complex problems, my goal is to
        always deliver exceptional results. When I’m not coding, you can find me
        exploring new trends in technology, contributing to open-source
        projects, or mentoring aspiring developers. Feel free to reach out if
        you’d like to collaborate or just want to say hi!
      </p>
    </AboutMeCard>
  );
}

function About() {
  return (
    <AboutMeContainer>
      <Title
        mainTitle="about me"
        subTitle="Passionate about crafting innovative solutions and building exceptional digital experiences."
      />
      <AboutMe />
      </AboutMeContainer>
  );
}

export default About;
