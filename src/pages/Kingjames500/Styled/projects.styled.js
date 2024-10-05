import styled from "styled-components";

import { Link } from "react-router-dom";

export const ProjectSection = styled.section`
  margin: 4rem;
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-top: 2rem;
`;

// url component styling
export const ProjectUrlDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
`;
export const ProjectLinks = styled(Link)`
  /* font-size: 2rem; */
  margin: 1.2rem;
  font-weight: 800;
  text-decoration: none;

  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 1rem 2rem;
  border-radius: 6px;
  transition: all 0.3s ease-in-out;
  text-transform: capitalize;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.white};
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ProjectCard = styled.div`
  /* border: 2px solid blue; */
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.5),
    0 0.6rem 2rem 0 rgba(0, 0, 0, 0.19);
  width: 30rem;
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 9px;
  overflow: hidden;
  h2 {
    margin: 1rem;
    font-size: 2.5rem;
    font-weight: 900;
    text-transform: capitalize;
    line-height: 1.5;
    letter-spacing: 2px;
    text-align: center;
  }

  p {
    margin: 1rem;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 1px;
    text-align: center;
  }
`;

export const ProjectCardImage = styled.div`
  object-fit: cover;
  margin: 0.5rem;

  img {
    --size: 98%;
    width: var(--size);
    height: var(--size);
  }
`;
