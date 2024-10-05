import Title from "../Title/Title";
import { Link } from "react-router-dom";
import projects from "../../data/projectsData";
import {
  ProjectUrlDisplay,
  ProjectLinks,
  ProjectCard,
  ProjectCardImage,
  ProjectSection,
  ProjectContainer,
} from "../../Styled/projects.styled";

function ProjectUrls({ liveUrl, githubUrl }) {
  return (
    <ProjectUrlDisplay>
      {liveUrl && (
        <ProjectLinks to={liveUrl} target="_blank" rel="noopener noreferrer">
          live url
        </ProjectLinks>
      )}

      {githubUrl && (
        <ProjectLinks to={githubUrl} target="_blank" rel="noopener noreferrer">
          github url
        </ProjectLinks>
      )}
    </ProjectUrlDisplay>
  );
}

function ProjectCards({ image, title, description, links }) {
  return (
    <ProjectCard>
      <ProjectCardImage>
        <img src={image} alt={title} />
      </ProjectCardImage>
      <h2>{title}</h2>
      <p>{description}</p>
      <ProjectUrls liveUrl={links.liveUrl} githubUrl={links.githubUrl} />
    </ProjectCard>
  );
}

function Projects() {
  return (
    <ProjectSection>
      <Title
        mainTitle="Featured Work"
        subTitle="Showcasing a collection of my recent work, highlighting the innovative solutions and creative designs I've built"
      />
      <ProjectContainer>
        {projects.map(
          (project, index) => (
            console.log(project),
            (
              <ProjectCards
                key={index}
                image={project.image}
                title={project.title}
                description={project.description}
                links={project.links}
              />
            )
          ),
        )}
      </ProjectContainer>
    </ProjectSection>
  );
}

export default Projects;
