import styled, { keyframes } from "styled-components";

// Define the sliding animation
const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const AboutStyled = styled.div`
  .About-container {
    padding-top: 10rem;
    text-align: center;

    h3 {
      font-size: 3rem;
      padding: 0 2rem 1.5rem 2rem;
    }

    p {
      font-size: 1.7rem;
    }
  }

  .about {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5rem 0;
  }

  .about-div {
    display: block;
    width: 20rem;
    height: 23rem;
    background: #312d6f;
    color: #fff;
    border-radius: 10px;
    text-align: center;
    opacity: 0;
    animation: ${slideIn} 1s ease forwards;
    animation-delay: calc(0.2s * var(--i));

    img {
      width: 100px;
      height: 100px;
      margin-top: 20px;
      border-radius: 50%;
    }

    h4 {
      padding-top: 70px;
      color: white;
      font-size: 2rem;
    }
  }

  .about-experience-div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;

    h4 {
      font-size: 5rem;
    }

    p {
      font-size: 3rem;
    }
  }

  .btn {
    padding: 1rem 2rem;
    border: 1px solid #198754;
    background: #198754;
    font-size: 2rem;
    margin-top: 3rem;
    color: #fff;
    border-radius: 1rem;
    transition: all ease 0.5s;
  }
  .btn:hover {
    background: transparent;
    cursor: pointer;
    color: #000;
  }
`;

export default AboutStyled;
