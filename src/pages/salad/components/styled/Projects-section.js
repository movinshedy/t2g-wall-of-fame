import styled from "styled-components";

const ProjectsStyled = styled.div`
  body,
  html {
    font-family: "Times New Roman", Times, serif;
  }
  .projects-container {
    background: #281c45;
    color: #fff;
    text-align: center;
    padding: 3rem 0;

    h3 {
      font-size: 4rem;
      font-weight: 600;
      padding-bottom: 1rem;
    }
    p {
      font-size: 1.7rem;
    }

    .projects-card {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      flex-wrap: wrap;
      gap: 5rem;
    }
    .project-div {
      border: 1px solid black;
      width: 27rem;
      text-align: center;
      border-radius: 0.5rem;
      overflow: hidden;
      background: #312d6f;
      height: 30rem;
      margin-top: 4rem;
      img {
        width: 100%;
        height: 15rem;
        object-fit: cover;
      }
      h4 {
        font-size: 2rem;
        padding-top: 1rem;
      }
      p {
        font-size: 1.8rem;
        padding: 1rem 0;
        color: #e3dcdc;
      }
      h5 {
        font-size: 1.7rem;
        padding-bottom: 1rem;
      }
    }
  }
`;
export default ProjectsStyled;
