import styled from "styled-components";

const SkillStled = styled.div`
  .skills-container {
    background: #151030;
    color: #fff;
    text-align: center;
    margin: 10rem 0;

    h3 {
      font-size: 4rem;
      padding: 2rem 0 0 0;
    }
  }
  .skills {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
    padding: 5rem 0;
  }
  .skill {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    clip-path: polygon(
      50% 0%,
      85% 15%,
      100% 50%,
      85% 85%,
      50% 100%,
      15% 85%,
      0% 50%,
      15% 15%
    );

    img {
      width: 100%;
      height: 100%;
      overflow: hidden;
      object-fit: cover;
      border-radius: 50%;
      transition: all ease 0.5s;
      clip-path: polygon(
        50% 0%,
        85% 15%,
        100% 50%,
        85% 85%,
        50% 100%,
        15% 85%,
        0% 50%,
        15% 15%
      );
    }
  }
  .skill:hover {
    cursor: pointer;
    transform: translateY(-3px);
  }
`;
export default SkillStled;
